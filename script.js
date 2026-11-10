// Abdulqader Alshihabi Portfolio - Ultra-Smooth Fluid Slider & Showcase Controller

function initPortfolio() {
  const snapContainer = document.getElementById('snapContainer');
  const sections = Array.from(document.querySelectorAll('section.section[id]'));
  const dockItems = document.querySelectorAll('.dock-item');
  const navLinks = document.querySelectorAll('.nav-link');

  let activeSectionIndex = 0;
  let isScrolling = false;

  // 1. Navigation & Dock Active State Synchronizer
  const updateActiveIndicators = (sectionId) => {
    dockItems.forEach((item) => {
      item.classList.toggle('active', item.getAttribute('href') === `#${sectionId}`);
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
    });
  };

  // 2. Smoothly Navigate to Specific Section Index (Anime-Style Fluid Transition)
  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    activeSectionIndex = index;
    const targetSec = sections[index];
    const targetId = targetSec.getAttribute('id');

    updateActiveIndicators(targetId);

    if (snapContainer) {
      snapContainer.scrollTo({
        top: targetSec.offsetTop,
        behavior: 'smooth'
      });
    } else {
      targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 3. Continuously Track Active Section on Real-time Scroll (Dock never gets stuck)
  if (snapContainer) {
    let scrollTicking = false;
    snapContainer.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          const scrollCenter = snapContainer.scrollTop + (snapContainer.clientHeight / 2);
          let closestIdx = 0;
          let minDistance = Infinity;

          sections.forEach((sec, idx) => {
            const secCenter = sec.offsetTop + (sec.offsetHeight / 2);
            const dist = Math.abs(scrollCenter - secCenter);
            if (dist < minDistance) {
              minDistance = dist;
              closestIdx = idx;
            }
          });

          if (closestIdx !== activeSectionIndex && !isScrolling) {
            activeSectionIndex = closestIdx;
            updateActiveIndicators(sections[closestIdx].getAttribute('id'));
          }
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }

  // 4. Smooth Mouse-Wheel Slide Navigation (Anime-style Slow Fluid Transition)
  window.addEventListener('wheel', (e) => {
    const modalEl = document.getElementById('certModal');
    if (modalEl && modalEl.classList.contains('open')) return;

    if (Math.abs(e.deltaY) < 25) return;

    e.preventDefault();

    if (isScrolling) return;

    if (e.deltaY > 0 && activeSectionIndex < sections.length - 1) {
      isScrolling = true;
      scrollToSection(activeSectionIndex + 1);
      setTimeout(() => { isScrolling = false; }, 850);
    } else if (e.deltaY < 0 && activeSectionIndex > 0) {
      isScrolling = true;
      scrollToSection(activeSectionIndex - 1);
      setTimeout(() => { isScrolling = false; }, 850);
    }
  }, { passive: false });

  // 5. Keyboard Navigation (Arrow Keys / Page Down / Page Up / Space)
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    const modalEl = document.getElementById('certModal');
    if (modalEl && modalEl.classList.contains('open')) return;

    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
      if (activeSectionIndex < sections.length - 1) {
        e.preventDefault();
        isScrolling = true;
        scrollToSection(activeSectionIndex + 1);
        setTimeout(() => { isScrolling = false; }, 850);
      }
    } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
      if (activeSectionIndex > 0) {
        e.preventDefault();
        isScrolling = true;
        scrollToSection(activeSectionIndex - 1);
        setTimeout(() => { isScrolling = false; }, 850);
      }
    }
  });

  // 6. Anchor Click Navigation (Dock & Top Nav)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const targetIdx = sections.indexOf(targetEl);
        if (targetIdx !== -1) {
          e.preventDefault();
          isScrolling = true;
          scrollToSection(targetIdx);
          setTimeout(() => { isScrolling = false; }, 850);
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }
        }
      }
    });
  });

  // 7. Handle Initial URL Hash (e.g. #works, #certificates)
  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);
    if (initialTarget) {
      const idx = sections.indexOf(initialTarget);
      if (idx !== -1) {
        setTimeout(() => scrollToSection(idx), 100);
      }
    }
  }

  // 8. Call Channel Pill Interaction (Click to Call / Copy feedback)
  const callChannelPill = document.getElementById('callChannelPill');
  if (callChannelPill) {
    callChannelPill.addEventListener('click', (e) => {
      if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        navigator.clipboard?.writeText('+966582733968');
        const span = callChannelPill.querySelector('span');
        if (span) {
          const original = span.textContent;
          span.textContent = 'Copied: +966 58 273 3968';
          setTimeout(() => { span.textContent = original; }, 2200);
        }
      }
    });
  }

  // 9. Works Dual-Monitor Interactive Showcase & Category Switcher (Tier 1 & Tier 2)
  const categoryButtons = document.querySelectorAll('.works-cat-btn');
  const projectSubnavRow = document.getElementById('projectSubnavRow');
  const codeFileName = document.getElementById('codeFileName');
  const codeSnippetArea = document.getElementById('codeSnippetArea');
  const desktopPreviewImg = document.getElementById('desktopPreviewImg');
  const worksViewLink = document.getElementById('worksViewLink');
  const worksViewText = document.getElementById('worksViewText');
  const prevWorkBtn = document.getElementById('prevWork');
  const nextWorkBtn = document.getElementById('nextWork');

  /* ==========================================================================
     PROJECTS DATA CONFIGURATION (3 Categories: Web, Mobile, ML \ DL)
     ========================================================================== */
  const projectsData = [
    // --- 1. Web Applications (web) ---
    {
      category: 'web',
      typeName: 'Graduation Project (CRIS)',
      actionText: 'View CRIS Capstone Case Study',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi/Islamic-University-CRIS',
      previewImg: 'assets/images/projects/cris_showcase.png',
      codeFile: 'CRISAnalytics.tsx',
      codeSnippet: `<span class="code-kw">import</span> React, { useState } <span class="code-kw">from</span> <span class="code-str">'react'</span>;
<span class="code-kw">import</span> { ScopusAPI, OpenAlexBridge } <span class="code-kw">from</span> <span class="code-str">'@/core'</span>;

<span class="code-cm">// Project: Islamic University CRIS (Research Intelligence)</span>
<span class="code-cm">// Problem: Fragmented research data &amp; unindexed Scopus publications</span>
<span class="code-cm">// Solution: Automated multi-source deduplication &amp; quartile analytics</span>
<span class="code-kw">export const</span> <span class="code-fn">CRISAnalyticsPlatform</span> = () => {
  <span class="code-kw">const</span> [metrics, setMetrics] = <span class="code-fn">useState</span>({ verified: <span class="code-var">true</span> });

  <span class="code-cm">// Reconcile and deduplicate Scopus &amp; OpenAlex publications</span>
  <span class="code-kw">const</span> <span class="code-fn">syncPublications</span> = <span class="code-kw">async</span> (doi: <span class="code-var">string</span>) => {
    <span class="code-kw">const</span> verifiedRecord = <span class="code-kw">await</span> ScopusAPI.<span class="code-fn">reconcileDOI</span>(doi);
    <span class="code-fn">setMetrics</span>(verifiedRecord);
  };

  <span class="code-kw">return</span> &lt;<span class="code-tag">ExecutiveCockpit</span> <span class="code-var">data</span>={metrics} <span class="code-var">onSync</span>={syncPublications} /&gt;;
};`
    },
    {
      category: 'web',
      typeName: 'Saaed HR & Payroll ERP',
      actionText: 'View Saaed ERP Case Study',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi/Sync-ERP-HR',
      previewImg: 'assets/images/projects/saaed_erp.png',
      codeFile: 'saudi_payroll_wps.py',
      codeSnippet: `<span class="code-kw">from</span> decimal <span class="code-kw">import</span> Decimal
<span class="code-kw">from</span> cryptography.fernet <span class="code-kw">import</span> Fernet

<span class="code-cm"># Project: Saaed (ساعد) — Enterprise HR &amp; Payroll ERP</span>
<span class="code-cm"># Problem: Disconnected HR/Finance &amp; manual payroll processing</span>
<span class="code-cm"># Solution: Automated Saudi GOSI, EOS, and WPS bank file generation</span>
<span class="code-kw">class</span> <span class="code-fn">SaudiPayrollEngine</span>:
    GOSI_SAUDI_RATE = Decimal(<span class="code-str">'0.0975'</span>)

    <span class="code-kw">def</span> <span class="code-fn">process_monthly_payroll</span>(self, employee, base_salary, allowances):
        gross = base_salary + allowances
        gosi = gross * self.GOSI_SAUDI_RATE <span class="code-kw">if</span> employee.is_saudi <span class="code-kw">else</span> Decimal(<span class="code-str">'0'</span>)
        net_payable = gross - gosi

        <span class="code-cm"># Encrypt PII banking records before database ledger dispatch</span>
        encrypted_iban = Fernet(KEY).encrypt(employee.iban.encode())
        <span class="code-kw">return</span> {<span class="code-str">"net_salary"</span>: net_payable, <span class="code-str">"wps_encrypted_record"</span>: encrypted_iban}`
    },
    {
      category: 'web',
      typeName: 'Shakkel LMS Platform',
      actionText: 'Visit Live LMS (learn.shakkel.store)',
      actionUrl: 'https://learn.shakkel.store/',
      previewImg: 'assets/images/projects/shakkel_learn.png',
      codeFile: 'CourseCurriculumBuilder.tsx',
      codeSnippet: `<span class="code-kw">import</span> React <span class="code-kw">from</span> <span class="code-str">'react'</span>;
<span class="code-kw">import</span> { useAuthRole } <span class="code-kw">from</span> <span class="code-str">'@/hooks/useAuth'</span>;
<span class="code-kw">import</span> { TiptapEditor } <span class="code-kw">from</span> <span class="code-str">'@/components/editor'</span>;

<span class="code-cm">// Project: Shakkel Learn — Corporate Workforce Training LMS</span>
<span class="code-cm">// Problem: Fragmented industrial training &amp; lack of role access control</span>
<span class="code-cm">// Solution: Multi-tenant RBAC, Tiptap course builder &amp; exam integrity</span>
<span class="code-kw">export const</span> <span class="code-fn">CourseCurriculumBuilder</span> = ({ courseId }: { courseId: <span class="code-var">string</span> }) => {
  <span class="code-kw">const</span> { isAuthorized } = <span class="code-fn">useAuthRole</span>([<span class="code-str">'instructor'</span>, <span class="code-str">'admin'</span>]);

  <span class="code-cm">// Enforce PostgreSQL RLS access security during lesson updates</span>
  <span class="code-kw">const</span> <span class="code-fn">handleSaveLesson</span> = <span class="code-kw">async</span> (lessonData: <span class="code-var">LessonPayload</span>) => {
    <span class="code-kw">if</span> (!isAuthorized) <span class="code-kw">throw new</span> <span class="code-fn">Error</span>(<span class="code-str">'Unauthorized'</span>);
    <span class="code-kw">await</span> <span class="code-fn">saveCurriculumModules</span>(courseId, lessonData);
  };

  <span class="code-kw">return</span> &lt;<span class="code-tag">TiptapEditor</span> <span class="code-var">onSave</span>={handleSaveLesson} <span class="code-var">lang</span>=<span class="code-str">"ar"</span> /&gt;;
};`
    },
    {
      category: 'web',
      typeName: 'Shakkel Industrial Store',
      actionText: 'Visit Production Store (shakkel.store)',
      actionUrl: 'https://shakkel.store/',
      previewImg: 'assets/images/projects/shakkel_store.png',
      codeFile: 'IndustrialRFQEngine.tsx',
      codeSnippet: `<span class="code-kw">import</span> { useState } <span class="code-kw">from</span> <span class="code-str">'react'</span>;
<span class="code-kw">import</span> { supabase } <span class="code-kw">from</span> <span class="code-str">'@/lib/supabaseClient'</span>;

<span class="code-cm">// Project: Shakkel Industrial &amp; Packaging E-Commerce</span>
<span class="code-cm">// Problem: Slow manual email/phone quotation cycles for bulk packaging</span>
<span class="code-cm">// Solution: Dynamic automated RFQ quote calculation with 15% VAT &amp; live sync</span>
<span class="code-kw">export function</span> <span class="code-fn">useQuotationRequest</span>() {
  <span class="code-kw">const</span> [quoteStatus, setQuoteStatus] = <span class="code-fn">useState</span>(<span class="code-str">'idle'</span>);

  <span class="code-kw">const</span> <span class="code-fn">submitRFQ</span> = <span class="code-kw">async</span> (cartItems: <span class="code-var">Item</span>[], companyCR: <span class="code-var">string</span>) => {
    <span class="code-fn">setQuoteStatus</span>(<span class="code-str">'calculating'</span>);
    <span class="code-kw">const</span> { data } = <span class="code-kw">await</span> supabase.<span class="code-fn">rpc</span>(<span class="code-str">'create_quote_with_items'</span>, {
      p_items: cartItems,
      p_vat: 0.15,
      p_company_cr: companyCR
    });
    <span class="code-fn">setQuoteStatus</span>(<span class="code-str">'dispatched'</span>);
    <span class="code-kw">return</span> data;
  };

  <span class="code-kw">return</span> { submitRFQ, quoteStatus };
}`
    },
    {
      category: 'web',
      typeName: 'LearnHub LMS Platform',
      actionText: 'Launch Live Demo (GitHub Pages)',
      actionUrl: 'https://abdulqader-alshihabi.github.io/LearningHub/',
      previewImg: 'assets/images/projects/learning_hub.png',
      codeFile: 'ResilientCourseCatalog.tsx',
      codeSnippet: `<span class="code-kw">import</span> { useQuery } <span class="code-kw">from</span> <span class="code-str">'@tanstack/react-query'</span>;
<span class="code-kw">import</span> { fallbackCourses } <span class="code-kw">from</span> <span class="code-str">'@/data/seedData'</span>;
<span class="code-kw">import</span> { supabase } <span class="code-kw">from</span> <span class="code-str">'@/integrations/supabase'</span>;

<span class="code-cm">// Project: LearnHub — Modern Enterprise LMS Platform</span>
<span class="code-cm">// Problem: LMS demo failure during database standby / cold starts</span>
<span class="code-cm">// Solution: Graceful offline seed data fallback layer ensuring 100% uptime</span>
<span class="code-kw">export const</span> <span class="code-fn">useCourseCatalog</span> = () => {
  <span class="code-kw">return</span> <span class="code-fn">useQuery</span>({
    queryKey: [<span class="code-str">'courses'</span>],
    queryFn: <span class="code-kw">async</span> () => {
      <span class="code-kw">const</span> { data, error } = <span class="code-kw">await</span> supabase.<span class="code-fn">from</span>(<span class="code-str">'courses'</span>).<span class="code-fn">select</span>(<span class="code-str">'*'</span>);
      <span class="code-cm">// Instant graceful fallback if cloud instance is paused</span>
      <span class="code-kw">if</span> (error || !data?.length) <span class="code-kw">return</span> fallbackCourses;
      <span class="code-kw">return</span> data;
    }
  });
};`
    },

    // --- 2. Mobile Applications (mobile) ---
    {
      category: 'mobile',
      typeName: 'Enterprise Mobile Suite',
      actionText: 'View Mobile App Architecture',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi',
      previewImg: 'assets/images/projects/project_mobile_screen.png',
      codeFile: 'AttendanceSyncScreen.tsx',
      codeSnippet: `<span class="code-kw">import</span> React, { useEffect, useState } <span class="code-kw">from</span> <span class="code-str">'react'</span>;
<span class="code-kw">import</span> { View, Text, StyleSheet } <span class="code-kw">from</span> <span class="code-str">'react-native'</span>;
<span class="code-kw">import</span> * <span class="code-kw">as</span> Location <span class="code-kw">from</span> <span class="code-str">'expo-location'</span>;

<span class="code-cm">// Project: Mobile Workforce Attendance &amp; Field Operations</span>
<span class="code-cm">// Problem: GPS spoofing &amp; unreliable offline network connectivity</span>
<span class="code-cm">// Solution: Geofenced verification &amp; SQLite offline sync queue</span>
<span class="code-kw">export const</span> <span class="code-fn">MobileCheckInScreen</span> = () => {
  <span class="code-kw">const</span> [status, setStatus] = <span class="code-fn">useState</span>(<span class="code-str">'Verifying location...'</span>);

  <span class="code-fn">useEffect</span>(() => {
    (<span class="code-kw">async</span> () => {
      <span class="code-kw">const</span> { status: perm } = <span class="code-kw">await</span> Location.<span class="code-fn">requestForegroundPermissionsAsync</span>();
      <span class="code-kw">if</span> (perm !== <span class="code-str">'granted'</span>) <span class="code-kw">return</span> <span class="code-fn">setStatus</span>(<span class="code-str">'Permission denied'</span>);
      <span class="code-kw">const</span> loc = <span class="code-kw">await</span> Location.<span class="code-fn">getCurrentPositionAsync</span>({ accuracy: 6 });
      <span class="code-fn">setStatus</span>(\`Verified within campus zone (\${loc.coords.latitude.toFixed(3)})\`);
    })();
  }, []);

  <span class="code-kw">return</span> &lt;<span class="code-tag">View</span> <span class="code-var">style</span>={styles.container}&gt;&lt;<span class="code-tag">Text</span>&gt;{status}&lt;/<span class="code-tag">Text</span>&gt;&lt;/<span class="code-tag">View</span>&gt;;
};`
    },
    {
      category: 'mobile',
      typeName: 'Saaed Self-Service Mobile',
      actionText: 'View Saaed Mobile App',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi/Sync-ERP-HR',
      previewImg: 'assets/images/projects/project_mobile_screen.png',
      codeFile: 'payroll_request_bloc.dart',
      codeSnippet: `<span class="code-kw">import</span> <span class="code-str">'package:flutter_bloc/flutter_bloc.dart'</span>;
<span class="code-kw">import</span> <span class="code-str">'package:local_auth/local_auth.dart'</span>;

<span class="code-cm">// Project: Saaed HR Mobile Self-Service</span>
<span class="code-cm">// Problem: Employees cannot securely view payslips on mobile</span>
<span class="code-cm">// Solution: Biometric authentication (FaceID/Fingerprint) &amp; encrypted PDF view</span>
<span class="code-kw">class</span> <span class="code-fn">PayrollBloc</span> <span class="code-kw">extends</span> <span class="code-fn">Bloc</span>&lt;PayrollEvent, PayrollState&gt; {
  <span class="code-kw">final</span> LocalAuthentication auth = LocalAuthentication();

  PayrollBloc() : <span class="code-kw">super</span>(PayrollInitial()) {
    on&lt;RequestPayslipEvent&gt;((event, emit) <span class="code-kw">async</span> {
      <span class="code-kw">final</span> bool didAuth = <span class="code-kw">await</span> auth.<span class="code-fn">authenticate</span>(
        localizedReason: <span class="code-str">'Authenticate to access monthly salary breakdown'</span>,
      );
      <span class="code-kw">if</span> (didAuth) {
        emit(PayrollLoaded(slipData: event.encryptedPayload));
      }
    });
  }
}`
    },

    // --- 3. ML \ DL Projects (ai) ---
    {
      category: 'ai',
      typeName: 'res-handler (AI Search)',
      actionText: 'View res-handler Case Study',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi/res-handler',
      previewImg: 'assets/images/projects/res_handler.jpg',
      codeFile: 'vector_search.go',
      codeSnippet: `<span class="code-kw">package</span> handlers

<span class="code-kw">import</span> (
    <span class="code-str">"context"</span>
    <span class="code-str">"github.com/pgvector/pgvector-go"</span>
)

<span class="code-cm">// Project: Islamic University Research Commercialisation Engine</span>
<span class="code-cm">// Problem: Industry problems couldn't match academic research via keywords</span>
<span class="code-cm">// Solution: AI semantic vector search matching problems to university research</span>
<span class="code-kw">func</span> (h *<span class="code-fn">Handler</span>) <span class="code-fn">MatchProblemToResearch</span>(ctx context.Context, query <span class="code-kw">string</span>) ([]Ticket, <span class="code-kw">error</span>) {
    <span class="code-cm">// Generate Azure OpenAI semantic embedding vector</span>
    vec, err := h.embedClient.<span class="code-fn">GetEmbedding</span>(ctx, query)
    <span class="code-kw">if</span> err != nil { <span class="code-kw">return</span> nil, err }

    <span class="code-cm">// Vector cosine similarity distance lookup with pgvector</span>
    sql := "SELECT id, title, sector FROM tickets ORDER BY embedding &lt;=&gt; $1 LIMIT 5"
    <span class="code-kw">return</span> h.db.<span class="code-fn">QueryTickets</span>(ctx, sql, pgvector.<span class="code-fn">NewVector</span>(vec))
}`
    },
    {
      category: 'ai',
      typeName: 'Vision Transformer (ViT)',
      actionText: 'View ViT Architecture',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi',
      previewImg: 'assets/images/projects/project_ml.png',
      codeFile: 'vit_transformer_engine.py',
      codeSnippet: `<span class="code-kw">import</span> torch
<span class="code-kw">import</span> torch.nn <span class="code-kw">as</span> nn

<span class="code-cm"># Project: Vision Transformer (ViT-B/16) for Medical Image Diagnosis</span>
<span class="code-cm"># Problem: CNNs lose long-range spatial context in high-resolution scans</span>
<span class="code-cm"># Solution: Multi-head self-attention on non-overlapping 16x16 image patches</span>
<span class="code-kw">class</span> <span class="code-fn">PatchEmbedding</span>(nn.Module):
    <span class="code-kw">def</span> <span class="code-fn">__init__</span>(self, img_size=224, patch_size=16, in_channels=3, embed_dim=768):
        <span class="code-fn">super</span>().__init__()
        self.proj = nn.Conv2d(in_channels, embed_dim, kernel_size=patch_size, stride=patch_size)

    <span class="code-kw">def</span> <span class="code-fn">forward</span>(self, x):
        <span class="code-cm"># [B, C, H, W] -&gt; [B, embed_dim, num_patches] -&gt; [B, num_patches, embed_dim]</span>
        <span class="code-kw">return</span> self.proj(x).flatten(2).transpose(1, 2)`
    },
    {
      category: 'ai',
      typeName: 'CineVault Movies',
      actionText: 'Launch Live CineVault App',
      actionUrl: 'https://abdulqader-alshihabi.github.io/Movie-Organizer-Desktop-App/',
      previewImg: 'assets/images/projects/cinevault.png',
      codeFile: 'movie_organizer.py',
      codeSnippet: `<span class="code-kw">import</span> hashlib
<span class="code-kw">from</span> PyQt5.QtCore <span class="code-kw">import</span> QPropertyAnimation, QEasingCurve
<span class="code-kw">from</span> PyQt5.QtWidgets <span class="code-kw">import</span> QGraphicsDropShadowEffect

<span class="code-cm"># Project: CineVault — Desktop Movie Organizer &amp; Profile Manager</span>
<span class="code-cm"># Problem: Sluggish desktop UI jitter &amp; unencrypted multi-user profiles</span>
<span class="code-cm"># Solution: Netflix-style profiles, SHA-256 security &amp; 60fps animations</span>
<span class="code-kw">class</span> <span class="code-fn">ProfileSelectorWidget</span>:
    <span class="code-kw">def</span> <span class="code-fn">verify_user_credentials</span>(self, entered_pin, stored_hash):
        <span class="code-cm"># Cryptographic SHA-256 password hash verification</span>
        <span class="code-kw">return</span> hashlib.sha256(entered_pin.encode()).hexdigest() == stored_hash

    <span class="code-kw">def</span> <span class="code-fn">animate_avatar_hover</span>(self, avatar_widget):
        <span class="code-cm"># 60fps hardware-accelerated smooth cubic easing</span>
        anim = QPropertyAnimation(avatar_widget, b<span class="code-str">"geometry"</span>)
        anim.setEasingCurve(QEasingCurve.OutCubic)
        anim.start()`
    }
  ];

  let currentCategory = 'web';
  let currentSubIndex = 0;

  const getCategoryProjects = () => projectsData.filter(p => p.category === currentCategory);

  const renderProject = (subIdx) => {
    const catProjects = getCategoryProjects();
    if (!catProjects.length) return;

    currentSubIndex = (subIdx + catProjects.length) % catProjects.length;
    const project = catProjects[currentSubIndex];

    // Update active sub-pill
    if (projectSubnavRow) {
      const pills = projectSubnavRow.querySelectorAll('.project-sub-pill');
      pills.forEach((pill, idx) => {
        pill.classList.toggle('active', idx === currentSubIndex);
      });
    }

    // Update Left Portrait Code Monitor
    if (codeFileName) codeFileName.textContent = project.codeFile;
    if (codeSnippetArea) codeSnippetArea.innerHTML = project.codeSnippet;

    // Update Right Desktop Website Monitor
    if (desktopPreviewImg) {
      desktopPreviewImg.style.opacity = '0';
      desktopPreviewImg.style.transform = 'scale(0.98)';
      setTimeout(() => {
        desktopPreviewImg.src = project.previewImg;
        desktopPreviewImg.alt = project.typeName + ' Preview';
        desktopPreviewImg.style.opacity = '1';
        desktopPreviewImg.style.transform = 'scale(1)';
      }, 160);
    }

    // Update Action Link above Monitor
    if (worksViewText) worksViewText.textContent = project.actionText;
    if (worksViewLink) worksViewLink.href = project.actionUrl;
  };

  const renderSubnav = () => {
    if (!projectSubnavRow) return;
    const catProjects = getCategoryProjects();
    projectSubnavRow.innerHTML = '';
    catProjects.forEach((p, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'project-sub-pill' + (idx === currentSubIndex ? ' active' : '');
      btn.classList.add('project-sub-pill');
      if (idx === currentSubIndex) btn.classList.add('active');
      btn.dataset.index = idx;
      btn.textContent = p.typeName;
      btn.addEventListener('click', () => {
        renderProject(idx);
      });
      projectSubnavRow.appendChild(btn);
    });
  };

  const selectCategory = (category) => {
    currentCategory = category;
    currentSubIndex = 0;

    categoryButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });

    renderSubnav();
    renderProject(0);
  };

  // Category buttons click
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      if (cat && cat !== currentCategory) {
        selectCategory(cat);
      }
    });
  });

  // Carousel Arrow Clicks (cycle within current category)
  if (prevWorkBtn) {
    prevWorkBtn.addEventListener('click', () => renderProject(currentSubIndex - 1));
  }
  if (nextWorkBtn) {
    nextWorkBtn.addEventListener('click', () => renderProject(currentSubIndex + 1));
  }

  // Initial Render
  renderSubnav();
  renderProject(0);

  /* ==========================================================================
     CERTIFICATES DATA CONFIGURATION (قسم إعداد وتعديل الشهادات)
     --------------------------------------------------------------------------
     * أين تضع ملفات الـ PDF للشهادات؟ ضعها مباشرة في المجلد:
       certificates/
     * كيفية إضافة شهادة جديدة:
       انسخ كائناً وضعه في القائمة مع تغيير الرابط:
       pdfUrl: "certificates/اسم_الملف.pdf"
     ========================================================================== */
  const certificatesData = [
    {
      id: 1,
      title: "Advanced Artificial Intelligence (Computer Vision)",
      issuer: "KAUST Academy & UPM",
      category: "ai",
      categoryLabel: "AI & Vision",
      year: "2026",
      credId: "KAUST-AI-UPM-2026",
      pdfUrl: "certificates/ABDULQADER_MOHAMMED_ALSHIHABI_AI UPM.pdf",
      verifyUrl: "https://kaust.edu.sa",
      hasOnlineVerify: false
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence (Distinction)",
      issuer: "KAUST Academy & UPM",
      category: "ai",
      categoryLabel: "AI & ML",
      year: "2026",
      credId: "KAUST-AI-DIST-2026",
      pdfUrl: "certificates/ABDULQADER_MOHAMMED_ALSHIHABI_Mugrin - Artificial Intelligence Introduction Stage - Dist.pdf",
      verifyUrl: "https://kaust.edu.sa",
      hasOnlineVerify: false
    },
    {
      id: 3,
      title: "Introductory Artificial Intelligence Program",
      issuer: "KAUST Academy & NTDP",
      category: "ai",
      categoryLabel: "AI & ML",
      year: "2025",
      credId: "5d29344d-1aee-429b",
      pdfUrl: "certificates/Abdulqader_Mohammed_Alshihabi_S2.pdf",
      verifyUrl: "https://kaust.edu.sa",
      hasOnlineVerify: false
    },
    {
      id: 4,
      title: "KAUST Academy AI Specialization Selection",
      issuer: "KAUST Academy & Islamic Univ.",
      category: "ai",
      categoryLabel: "AI & Academic",
      year: "2026",
      credId: "IU-KAUST-2195195835",
      pdfUrl: "certificates/ABDULQADER_MOHAMMED_ALSHIHABI_2195195835.pdf",
      verifyUrl: "https://kaust.edu.sa",
      hasOnlineVerify: false
    },
    {
      id: 5,
      title: "Improving Deep Neural Networks",
      issuer: "DeepLearning.AI (Andrew Ng)",
      category: "ai",
      categoryLabel: "Deep Learning",
      year: "2024",
      credId: "AKKXRP44M1Q9",
      pdfUrl: "certificates/Improving Deep Neural Networks.pdf",
      verifyUrl: "https://coursera.org/verify/AKKXRP44M1Q9",
      hasOnlineVerify: true
    },
    {
      id: 6,
      title: "Calculus for Machine Learning & Data Science",
      issuer: "DeepLearning.AI",
      category: "ai",
      categoryLabel: "ML Mathematics",
      year: "2024",
      credId: "76B7WU00Q3AD",
      pdfUrl: "certificates/Calculus for Machine Learning and Data Science.pdf",
      verifyUrl: "https://coursera.org/verify/76B7WU00Q3AD",
      hasOnlineVerify: true
    },
    {
      id: 7,
      title: "Linear Algebra for Machine Learning & Data Science",
      issuer: "DeepLearning.AI",
      category: "ai",
      categoryLabel: "ML Mathematics",
      year: "2024",
      credId: "R0I3WTWZKVBW",
      pdfUrl: "certificates/Linear Algebra for Machine Learning and Data Science.pdf",
      verifyUrl: "https://coursera.org/verify/R0I3WTWZKVBW",
      hasOnlineVerify: true
    },
    {
      id: 8,
      title: "Probability & Statistics for Machine Learning",
      issuer: "DeepLearning.AI",
      category: "ai",
      categoryLabel: "ML Mathematics",
      year: "2024",
      credId: "INN9YZM9LWH2",
      pdfUrl: "certificates/Probability & Statistics for Machine Learning & Data Science.pdf",
      verifyUrl: "https://coursera.org/verify/INN9YZM9LWH2",
      hasOnlineVerify: true
    },
    {
      id: 9,
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      category: "software",
      categoryLabel: "Data Science",
      year: "2024",
      credId: "D5YUTS4LG04Q",
      pdfUrl: "certificates/Exploratory Data Analysis for Machine Learning.pdf",
      verifyUrl: "https://coursera.org/verify/D5YUTS4LG04Q",
      hasOnlineVerify: true
    },
    {
      id: 10,
      title: "Supervised Machine Learning: Regression",
      issuer: "IBM",
      category: "software",
      categoryLabel: "Machine Learning",
      year: "2024",
      credId: "KXYYHO2NZR59",
      pdfUrl: "certificates/Supervised Machine Learning.pdf",
      verifyUrl: "https://coursera.org/verify/KXYYHO2NZR59",
      hasOnlineVerify: true
    },
    {
      id: 11,
      title: "Python Basics (Python 3 Programming)",
      issuer: "University of Michigan",
      category: "software",
      categoryLabel: "Python Core",
      year: "2024",
      credId: "BV5HW4PQZCN7",
      pdfUrl: "certificates/Bisac Py.pdf",
      verifyUrl: "https://coursera.org/verify/BV5HW4PQZCN7",
      hasOnlineVerify: true
    },
    {
      id: 12,
      title: "Python Functions, Files, and Dictionaries",
      issuer: "University of Michigan",
      category: "software",
      categoryLabel: "Python Core",
      year: "2024",
      credId: "FBWFJNF9WK5C",
      pdfUrl: "certificates/Python Functions, Files, and Dictionaries.pdf",
      verifyUrl: "https://coursera.org/verify/FBWFJNF9WK5C",
      hasOnlineVerify: true
    },
    {
      id: 13,
      title: "Python Classes and Inheritance",
      issuer: "University of Michigan",
      category: "software",
      categoryLabel: "Object-Oriented",
      year: "2024",
      credId: "WWFCEPF1P2QU",
      pdfUrl: "certificates/Python Classes and Inheritance.pdf",
      verifyUrl: "https://coursera.org/verify/WWFCEPF1P2QU",
      hasOnlineVerify: true
    },
    {
      id: 14,
      title: "Data Collection and Processing with Python",
      issuer: "University of Michigan",
      category: "software",
      categoryLabel: "Data Engineering",
      year: "2024",
      credId: "YO7PLLONYNNF",
      pdfUrl: "certificates/Data Collection and Processing with Python.pdf",
      verifyUrl: "https://coursera.org/verify/YO7PLLONYNNF",
      hasOnlineVerify: true
    },
    {
      id: 15,
      title: "Introduction to Data Science in Python",
      issuer: "University of Michigan",
      category: "software",
      categoryLabel: "Data Science",
      year: "2024",
      credId: "7ZTT0DXOSF56",
      pdfUrl: "certificates/Introduction to Data Science in Python.pdf",
      verifyUrl: "https://coursera.org/verify/7ZTT0DXOSF56",
      hasOnlineVerify: true
    },
    {
      id: 16,
      title: "Asaqefah SandBox Innovation Program",
      issuer: "Asaqefah Business Dev. & AWS",
      category: "cloud",
      categoryLabel: "Cloud & Innovation",
      year: "2026",
      credId: "ASQ-2026-AE0323BD",
      pdfUrl: "certificates/ASQ-2026-AE0323BD.pdf",
      verifyUrl: "https://asaqefah.com",
      hasOnlineVerify: false
    }
  ];

  let currentCertCategory = 'all';
  let currentCertPage = 0;
  const certsPerPage = 6;

  const certsGrid = document.getElementById('certsGrid');
  const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
  const certPrevBtn = document.getElementById('certPrevBtn');
  const certNextBtn = document.getElementById('certNextBtn');
  const certPageIndicator = document.getElementById('certPageIndicator');
  const certPageCounter = document.getElementById('certPageCounter');

  // Modal elements (active only, old legacy variables removed)
  const certModal = document.getElementById('certModal');
  const certModalClose = document.getElementById('certModalClose');
  const modalCertTitle = document.getElementById('modalCertTitle');
  const modalDocSub = document.getElementById('modalDocSub');
  const modalPdfLink = document.getElementById('modalPdfLink');
  const modalVerifyLink = document.getElementById('modalVerifyLink');
  const certPdfFrame = document.getElementById('certPdfFrame');

  const getFilteredCerts = () => {
    if (currentCertCategory === 'all') return certificatesData;
    return certificatesData.filter(c => c.category === currentCertCategory);
  };

  const renderCertificates = () => {
    if (!certsGrid) return;

    const filtered = getFilteredCerts();
    const totalPages = Math.max(1, Math.ceil(filtered.length / certsPerPage));

    if (currentCertPage >= totalPages) currentCertPage = totalPages - 1;
    if (currentCertPage < 0) currentCertPage = 0;

    const startIdx = currentCertPage * certsPerPage;
    const endIdx = startIdx + certsPerPage;
    const pageItems = filtered.slice(startIdx, endIdx);

    // Smooth fade transition
    certsGrid.classList.add('fade-out');

    setTimeout(() => {
      certsGrid.innerHTML = pageItems.map(cert => `
        <div class="cert-card" data-id="${cert.id}" tabindex="0" role="button" aria-label="View ${cert.title} Certificate">
          <div class="cert-card-header">
            <div class="cert-issuer-badge">
              <svg class="cert-doc-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <span class="cert-issuer-name">${cert.issuer}</span>
            </div>
            <span class="cert-category-tag">${cert.categoryLabel}</span>
          </div>

          <div class="cert-card-body">
            <h3 class="cert-card-title">${cert.title}</h3>
            <span class="cert-card-year">${cert.year}</span>
          </div>

          <div class="cert-card-footer">
            <span class="cert-cred-id">ID: ${cert.credId}</span>
            <button type="button" class="cert-view-btn" data-id="${cert.id}">
              View Certificate ↗
            </button>
          </div>
        </div>
      `).join('');

      certsGrid.classList.remove('fade-out');

      // Clicking card or "View Certificate" opens the pop-up modal
      certsGrid.querySelectorAll('.cert-card').forEach(card => {
        const handleOpen = () => {
          const certId = parseInt(card.dataset.id);
          const cert = certificatesData.find(c => c.id === certId);
          if (cert) openCertModal(cert);
        };

        card.addEventListener('click', handleOpen);
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpen();
          }
        });
      });

      // Update Pagination Controls
      if (certPrevBtn) certPrevBtn.disabled = (currentCertPage === 0);
      if (certNextBtn) certNextBtn.disabled = (currentCertPage >= totalPages - 1);
      if (certPageCounter) certPageCounter.textContent = `Page ${currentCertPage + 1} of ${totalPages} (${filtered.length} total)`;

      // Update Dots
      if (certPageIndicator) {
        let dotsHtml = '';
        for (let i = 0; i < totalPages; i++) {
          dotsHtml += `<span class="cert-dot ${i === currentCertPage ? 'active' : ''}" data-page="${i}"></span>`;
        }
        certPageIndicator.innerHTML = dotsHtml;

        certPageIndicator.querySelectorAll('.cert-dot').forEach(dot => {
          dot.addEventListener('click', () => {
            currentCertPage = parseInt(dot.dataset.page);
            renderCertificates();
          });
        });
      }
    }, 140);
  };

  // Filter Buttons
  certFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCertCategory = btn.dataset.filter;
      currentCertPage = 0;
      renderCertificates();
    });
  });

  // Next / Prev buttons
  if (certPrevBtn) {
    certPrevBtn.addEventListener('click', () => {
      if (currentCertPage > 0) {
        currentCertPage--;
        renderCertificates();
      }
    });
  }

  if (certNextBtn) {
    certNextBtn.addEventListener('click', () => {
      const filtered = getFilteredCerts();
      const totalPages = Math.ceil(filtered.length / certsPerPage);
      if (currentCertPage < totalPages - 1) {
        currentCertPage++;
        renderCertificates();
      }
    });
  }

  // Open Pop-up Modal with Raw PDF Embed
  const openCertModal = (cert) => {
    if (!certModal) return;

    if (modalCertTitle) modalCertTitle.textContent = cert.title;
    if (modalDocSub) modalDocSub.textContent = `${cert.issuer} • ${cert.year} • Credential ID: ${cert.credId}`;

    const encodedPdf = encodeURI(cert.pdfUrl);

    // Set raw PDF source in the pop-up iframe viewer
    if (certPdfFrame) certPdfFrame.src = encodedPdf;

    // Link inside modal opens raw PDF in a new tab when explicitly clicked by user
    if (modalPdfLink) {
      modalPdfLink.href = encodedPdf;
    }

    if (modalVerifyLink) {
      if (cert.hasOnlineVerify && cert.verifyUrl) {
        modalVerifyLink.href = cert.verifyUrl;
        modalVerifyLink.style.display = 'inline-flex';
      } else {
        modalVerifyLink.style.display = 'none';
      }
    }

    certModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  // Close Pop-up Modal
  const closeCertModal = () => {
    if (certModal) {
      certModal.classList.remove('open');
      if (certPdfFrame) certPdfFrame.src = '';
      document.body.style.overflow = '';
    }
  };

  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertModal();
  });

  // Initial Certificates Render
  renderCertificates();

  // Initialize first active section indicator
  if (sections.length > 0) {
    updateActiveIndicators(sections[0].getAttribute('id'));
  }
}

// Bulletproof execution across all environments and cache states
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
