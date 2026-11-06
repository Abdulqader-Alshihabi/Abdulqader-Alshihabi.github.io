// Abdulqader Alshihabi Portfolio - Full-Page Scroll-Snap & Interactive Functionality

document.addEventListener('DOMContentLoaded', () => {
  const snapContainer = document.getElementById('snapContainer');
  const sections = Array.from(document.querySelectorAll('section.section[id]'));
  const dockItems = document.querySelectorAll('.dock-item');
  const navLinks = document.querySelectorAll('.nav-link');

  let activeSectionIndex = 0;

  // 1. Navigation & Dock Active State Synchronizer
  const updateActiveIndicators = (sectionId) => {
    dockItems.forEach((item) => {
      item.classList.toggle('active', item.getAttribute('href') === `#${sectionId}`);
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${sectionId}`);
    });
  };

  // 2. Smoothly Navigate to Specific Section Index (For Clicks & Keys)
  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) return;
    activeSectionIndex = index;

    sections[activeSectionIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    const targetId = sections[activeSectionIndex].getAttribute('id');
    updateActiveIndicators(targetId);
  };

  // 3. High-Performance IntersectionObserver for Lag-Free Trackpad & Mouse Scrolling
  if ('IntersectionObserver' in window && snapContainer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.getAttribute('id');
          const idx = sections.indexOf(entry.target);
          if (idx !== -1) {
            activeSectionIndex = idx;
          }
          updateActiveIndicators(targetId);
        }
      });
    }, {
      root: snapContainer,
      threshold: 0.5
    });

    sections.forEach((sec) => observer.observe(sec));
  } else if (snapContainer) {
    let ticking = false;
    snapContainer.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = snapContainer.scrollTop + (window.innerHeight / 2);
          sections.forEach((sec, idx) => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              activeSectionIndex = idx;
              updateActiveIndicators(sec.getAttribute('id'));
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 4. Keyboard Navigation (Arrow Keys / Page Down / Page Up / Space)
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      return;
    }
    const modalEl = document.getElementById('certModal');
    if (modalEl && modalEl.classList.contains('open')) {
      return;
    }

    if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
      if (activeSectionIndex < sections.length - 1) {
        e.preventDefault();
        scrollToSection(activeSectionIndex + 1);
      }
    } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
      if (activeSectionIndex > 0) {
        e.preventDefault();
        scrollToSection(activeSectionIndex - 1);
      }
    }
  });

  // 5. Anchor Click Navigation (Dock & Top Nav)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const targetIdx = sections.indexOf(targetEl);
        if (targetIdx !== -1) {
          e.preventDefault();
          scrollToSection(targetIdx);
        }
      }
    });
  });

  // 7. Works Dual-Monitor Interactive Showcase & Category Switcher
  const typePills = document.querySelectorAll('.type-pill');
  const codeFileName = document.getElementById('codeFileName');
  const codeSnippetArea = document.getElementById('codeSnippetArea');
  const desktopPreviewImg = document.getElementById('desktopPreviewImg');
  const worksViewLink = document.getElementById('worksViewLink');
  const worksViewText = document.getElementById('worksViewText');
  const prevWorkBtn = document.getElementById('prevWork');
  const nextWorkBtn = document.getElementById('nextWork');

  /* ==========================================================================
     PROJECTS DATA CONFIGURATION (قسم إعداد وتعديل المشاريع)
     --------------------------------------------------------------------------
     * أين تضع صور المشاريع؟ ضع صور المعاينة داخل المجلد:
       assets/images/projects/
     * كيفية إضافة مشروع جديد:
       فقط انسخ أحد الكائنات بالأسفل والصقه، وغيّر البيانات:
       {
         type: 'web', // أو 'mobile' أو 'ml' أو 'ai'
         typeName: 'اسم نوع المشروع (مثلاً: Flutter Mobile App)',
         actionText: 'نص الزر (مثلاً: View on GitHub)',
         actionUrl: 'رابط المشروع أو الريبو',
         previewImg: 'assets/images/projects/اسم_الصورة.png',
         codeFile: 'اسم_ملف_الكود.ts',
         codeSnippet: `الكود الملون الذي يظهر على الشاشة العمودية`
       }
     ========================================================================== */
  const projectsData = [
    {
      type: 'web',
      typeName: 'Graduation Project (CRIS)',
      actionText: 'View LearningHub Repo',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi/LearningHub',
      previewImg: 'assets/images/projects/project_singleton.png',
      codeFile: 'CRISPlatform.tsx',
      codeSnippet: `<span class="code-kw">import</span> React, { useState, useEffect } <span class="code-kw">from</span> <span class="code-str">'react'</span>;
<span class="code-kw">import</span> { ResearchEngine, AnalyticsGrid } <span class="code-kw">from</span> <span class="code-str">'@/core'</span>;

<span class="code-cm">// CRIS - Academic &amp; Research Intelligence Platform (Graduation Project)</span>
<span class="code-kw">export const</span> <span class="code-fn">CRISPlatform</span> = () => {
  <span class="code-kw">const</span> [query, setQuery] = <span class="code-fn">useState</span>(<span class="code-str">""</span>);
  <span class="code-kw">const</span> [metrics, setMetrics] = <span class="code-fn">useState</span>(<span class="code-var">null</span>);

  <span class="code-cm">// Orchestrate real-time query parsing &amp; faculty research intelligence</span>
  <span class="code-kw">return</span> (
    &lt;<span class="code-tag">section</span> <span class="code-var">className</span>=<span class="code-str">"cris-workspace"</span>&gt;
      &lt;<span class="code-tag">ResearchEngine</span>
        <span class="code-var">title</span>=<span class="code-str">"Consultation &amp; Research Hub"</span>
        <span class="code-var">institution</span>=<span class="code-str">"Islamic University"</span>
        <span class="code-var">onSearch</span>={(q) =&gt; <span class="code-fn">dispatchQuery</span>(q)}
      /&gt;
      &lt;<span class="code-tag">AnalyticsGrid</span> <span class="code-var">activeStatus</span>={<span class="code-str">"Live"</span>} /&gt;
    &lt;/<span class="code-tag">section</span>&gt;
  );
};`
    },
    {
      type: 'mobile',
      typeName: 'Enterprise ERP Suite',
      actionText: 'View Shakkel Case Study',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi/Industrial_Shakkel',
      previewImg: 'assets/images/projects/project_mobile_screen.png',
      codeFile: 'hrm_payroll_sync.py',
      codeSnippet: `<span class="code-kw">from</span> rest_framework <span class="code-kw">import</span> viewsets, status
<span class="code-kw">from</span> rest_framework.response <span class="code-kw">import</span> Response
<span class="code-kw">from</span> .models <span class="code-kw">import</span> EmployeeRecord, PayrollAudit
<span class="code-kw">from</span> .integrations <span class="code-kw">import</span> FinanceBridge

<span class="code-cm"># Asaqefah ERP: Automated HR-to-Finance Ledger Service</span>
<span class="code-kw">class</span> <span class="code-fn">HRMPayrollSyncViewSet</span>(viewsets.ModelViewSet):
    queryset = EmployeeRecord.objects.filter(is_active=<span class="code-var">True</span>)

    <span class="code-kw">def</span> <span class="code-fn">sync_department_finance</span>(self, request, pk=<span class="code-var">None</span>):
        audit = FinanceBridge.calculate_payroll_ledger(pk)
        <span class="code-kw">return</span> Response({
            <span class="code-str">"status"</span>: <span class="code-str">"synced"</span>,
            <span class="code-str">"ledger_id"</span>: audit.id,
            <span class="code-str">"timestamp"</span>: audit.generated_at
        }, status=status.HTTP_200_OK)`
    },
    {
      type: 'ml',
      typeName: 'AI & Vision Model',
      actionText: 'View Movie Organizer Repo',
      actionUrl: 'https://github.com/Abdulqader-Alshihabi/Movie-Organizer-Desktop-App',
      previewImg: 'assets/images/projects/project_ml.png',
      codeFile: 'vision_transformer_kaust.py',
      codeSnippet: `<span class="code-kw">import</span> torch
<span class="code-kw">import</span> torch.nn <span class="code-kw">as</span> nn
<span class="code-kw">from</span> torchvision.models <span class="code-kw">import</span> vit_b_16

<span class="code-cm"># KAUST Academy &amp; UPM: Computer Vision Deep Learning Classifier</span>
<span class="code-kw">class</span> <span class="code-fn">VisionTransformerClassifier</span>(nn.Module):
    <span class="code-kw">def</span> <span class="code-fn">__init__</span>(self, num_classes=<span class="code-str">10</span>, pretrained=<span class="code-var">True</span>):
        super().<span class="code-fn">__init__</span>()
        self.backbone = vit_b_16(weights=<span class="code-str">"DEFAULT"</span>)
        self.backbone.heads = nn.Linear(<span class="code-str">768</span>, num_classes)

    <span class="code-kw">def</span> <span class="code-fn">forward</span>(self, x):
        features = self.backbone(x)
        <span class="code-kw">return</span> torch.softmax(features, dim=-<span class="code-str">1</span>)
<span class="code-cm"># KAUST UPM Benchmark: Val Acc 98.74% | Loss 0.038</span>`
    }
  ];

  let currentProjectIdx = 0;

  const renderProject = (idx) => {
    currentProjectIdx = (idx + projectsData.length) % projectsData.length;
    const project = projectsData[currentProjectIdx];

    // Update Pills
    typePills.forEach((pill) => {
      pill.classList.toggle('active', parseInt(pill.dataset.index) === currentProjectIdx);
    });

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
      }, 180);
    }

    // Update Action Link above Monitor
    if (worksViewText) worksViewText.textContent = project.actionText;
    if (worksViewLink) worksViewLink.href = project.actionUrl;
  };

  // Initial Render
  renderProject(0);

  // Type Pills Clicks
  typePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.dataset.index);
      renderProject(idx);
    });
  });

  // Carousel Arrow Clicks
  if (prevWorkBtn) {
    prevWorkBtn.addEventListener('click', () => renderProject(currentProjectIdx - 1));
  }
  if (nextWorkBtn) {
    nextWorkBtn.addEventListener('click', () => renderProject(currentProjectIdx + 1));
  }

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
});
