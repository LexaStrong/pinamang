/**
 * PINAMANG EDUCATIONAL COMPLEX (PINAECO) - KONONGO
 * Interactive UI Engine & Modals Manager
 */

document.addEventListener('DOMContentLoaded', () => {
  // Page Preloader Fadeout
  const pageLoader = document.getElementById('pageLoader');
  if (pageLoader) {
    const hideLoader = () => {
      pageLoader.classList.add('hidden');
    };
    if (document.readyState === 'complete') {
      setTimeout(hideLoader, 500);
    } else {
      window.addEventListener('load', () => {
        setTimeout(hideLoader, 500);
      });
      // Safety fallback
      setTimeout(hideLoader, 1600);
    }
  }

  // Elements
  const mainHeader = document.getElementById('mainHeader');
  const toast = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  // Modals
  const admissionModal = document.getElementById('admissionModal');
  const tourModal = document.getElementById('tourModal');
  const portalModal = document.getElementById('portalModal');
  const videoModal = document.getElementById('videoModal');

  // Helper: Show Toast
  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  // Helper: Modal toggles
  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Close when clicking overlay backdrop
  [admissionModal, tourModal, portalModal, videoModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    }
  });

  // Header Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      mainHeader?.classList.add('scrolled');
    } else {
      mainHeader?.classList.remove('scrolled');
    }
  });

  // Admission Buttons
  const openAdmissionBtns = [
    document.getElementById('headerApplyBtn'),
    document.getElementById('admissionsApplyBtn')
  ];

  openAdmissionBtns.forEach(btn => {
    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(admissionModal);
    });
  });

  document.getElementById('closeAdmissionModal')?.addEventListener('click', () => {
    closeModal(admissionModal);
  });

  // Tour Buttons
  document.getElementById('admissionsTourBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(tourModal);
  });

  document.getElementById('closeTourModal')?.addEventListener('click', () => {
    closeModal(tourModal);
  });

  // Portal Buttons
  const openParentBtns = [
    document.getElementById('openParentPortalBtn'),
    ...document.querySelectorAll('.open-portal-parent')
  ];
  const openStudentBtns = [
    document.getElementById('openStudentPortalBtn'),
    ...document.querySelectorAll('.open-portal-student')
  ];

  const portalModalTitle = document.getElementById('portalModalTitle');
  const portalIdLabel = document.getElementById('portalIdLabel');
  const portalIdInput = document.getElementById('portalId');

  openParentBtns.forEach(btn => {
    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      if (portalModalTitle) portalModalTitle.textContent = 'Parent Portal Login';
      if (portalIdLabel) portalIdLabel.textContent = 'Parent ID / Registered Phone';
      if (portalIdInput) portalIdInput.placeholder = 'e.g. 0248153394';
      openModal(portalModal);
    });
  });

  openStudentBtns.forEach(btn => {
    btn?.addEventListener('click', (e) => {
      e.preventDefault();
      if (portalModalTitle) portalModalTitle.textContent = 'Student Portal Login';
      if (portalIdLabel) portalIdLabel.textContent = 'Student Index / ID';
      if (portalIdInput) portalIdInput.placeholder = 'e.g. PEC-2026-004';
      openModal(portalModal);
    });
  });

  document.getElementById('closePortalModal')?.addEventListener('click', () => {
    closeModal(portalModal);
  });

  // Video Modal
  document.getElementById('heroWatchVideoBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(videoModal);
  });

  document.getElementById('closeVideoModal')?.addEventListener('click', () => {
    closeModal(videoModal);
  });

  // Form Submissions
  // 1. Admission Form
  const admissionForm = document.getElementById('admissionForm');
  admissionForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('appStudentName')?.value || 'Student';
    closeModal(admissionModal);
    admissionForm.reset();
    showToast(`Application received for ${name}! Our Admissions Office in Konongo will contact you shortly.`);
  });

  // 2. Tour Form
  const tourForm = document.getElementById('tourForm');
  tourForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal(tourModal);
    tourForm.reset();
    showToast('Your campus tour has been scheduled! We look forward to welcoming you to Pinamang.');
  });

  // 3. Portal Login Form
  const portalForm = document.getElementById('portalForm');
  portalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal(portalModal);
    portalForm.reset();
    showToast('Login successful! Redirecting to Pinamang School Vault Portal...');
  });

  // 4. Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    newsletterForm.reset();
    showToast(`Thank you! ${email} is now subscribed to Pinamang updates.`);
  });

  // Program Card Details Trigger
  const programCards = document.querySelectorAll('.program-card');
  programCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.querySelector('.program-name')?.textContent;
      showToast(`Viewing curriculum details for ${name}. Contact admissions for full syllabus.`);
    });
    card.style.cursor = 'pointer';
  });

  document.getElementById('viewAllProgramsBtn')?.addEventListener('click', () => {
    showToast('Displaying comprehensive Crèche to JHS academic curriculum details.');
  });

  // Milestone Counter Animation
  const statNumbers = document.querySelectorAll('.banner-stat-num');
  let animated = false;

  function runCounters() {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-count');
      const isPercent = stat.textContent.includes('%');
      const isPlus = stat.textContent.includes('+');
      let count = 0;
      const step = Math.ceil(target / 40);

      const updateCount = () => {
        count += step;
        if (count < target) {
          stat.textContent = count + (isPercent ? '%' : (isPlus ? '+' : ''));
          setTimeout(updateCount, 30);
        } else {
          stat.textContent = target + (isPercent ? '%' : (isPlus ? '+' : ''));
        }
      };
      updateCount();
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-banner-dark');
  if (statsSection) observer.observe(statsSection);

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = '#ffffff';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      }
    });
  }
});
