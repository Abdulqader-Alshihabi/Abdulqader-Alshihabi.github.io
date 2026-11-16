"use client";
import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

import Loader from "./loader";
import gsap from "gsap";
import { usePerfProfile } from "@/hooks/use-perf-profile";

type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};
const INITIAL: PreloaderContextType = {
  isLoading: true,
  loadingPercent: 0,
  bypassLoading: () => {},
};
export const preloaderContext = createContext<PreloaderContextType>(INITIAL);

type PreloaderProps = {
  children: ReactNode;
  disabled?: boolean;
};

export const usePreloader = () => {
  const context = useContext(preloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
const LOADING_TIME = 2.8;
function Preloader({ children, disabled = false }: PreloaderProps) {
  const pathname = usePathname();
  // Skip the loading splash for the résumé route (and anywhere it's disabled).
  const skip = disabled || pathname?.startsWith("/resume");

  const [isLoading, setIsLoading] = useState(!skip);
  const [loadingPercent, setLoadingPercent] = useState(skip ? 100 : 0);
  const loadingTween = useRef<gsap.core.Tween>(null);

  // The splash exists only to mask the Chibi 3D scene loading. On low-end /
  // reduced-motion devices that scene is never loaded, so bypass immediately.
  const { disable3D, ready: perfReady } = usePerfProfile();

  const bypassLoading = useCallback(() => {
    // Allow the countdown tween to finish its smooth 0->100 curve instead of
    // snapping abruptly when WebGL assets resolve early.
  }, []);

  useEffect(() => {
    if (perfReady && disable3D) {
      loadingTween.current?.kill();
      setLoadingPercent(100);
      setIsLoading(false);
    }
  }, [perfReady, disable3D]);
  const loadingPercentRef = useRef<{ value: number }>({ value: 0 });
  useEffect(() => {
    if (skip) return;
    let lastInt = -1;
    loadingTween.current = gsap.to(loadingPercentRef.current, {
      value: 100,
      duration: LOADING_TIME,
      ease: "power2.inOut",
      onUpdate: () => {
        const next = Math.round(loadingPercentRef.current.value);
        if (next !== lastInt) {
          lastInt = next;
          setLoadingPercent(next);
        }
      },
      onComplete: () => {
        setLoadingPercent(100);
        setIsLoading(false);
      },
    });
    return () => {
      loadingTween.current?.kill();
    };
  }, [skip]);

  const value = useMemo(
    () => ({ isLoading, bypassLoading, loadingPercent }),
    [isLoading, bypassLoading, loadingPercent]
  );

  return (
    <preloaderContext.Provider value={value}>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {children}
    </preloaderContext.Provider>
  );
}

export default Preloader;
