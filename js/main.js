// ==========================================================================
// AURA Hotel & Luxury Resort - Interactive Scripts
// Aurangabad (Chhatrapati Sambhajinagar), Maharashtra
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initDrawer();
  initRoomTabs();
  initBookingModule();
  initScrollAnimations();
  initAccordions();
  initSmoothScroll();
  initBookingBarDates();
  setupBookingCalculator();
});

// 1. Sticky Header Scroll Effect
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 2. Fullscreen Navigation Drawer
function initDrawer() {
  const trigger = document.getElementById('navTrigger');
  const drawer = document.getElementById('mainDrawer');
  const closeBtn = document.getElementById('drawerClose');
  const navLinks = document.querySelectorAll('.drawer-nav-link');

  if (!trigger || !drawer) return;

  const openDrawer = (e) => {
    if (e) e.preventDefault();
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = (e) => {
    if (e) e.preventDefault();
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  trigger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

// 3. Interactive Room & Suite Switcher
function initRoomTabs() {
  const tabButtons = document.querySelectorAll('.floorplan-tab-btn');
  const card = document.getElementById('activeFloorplanCard');
  if (!tabButtons.length || !card) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const roomId = btn.getAttribute('data-room');
      const data = ROOMS_DATA.find(item => item.id === roomId);
      if (!data) return;

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      card.style.opacity = '0';
      card.style.transform = 'translateY(8px)';
      card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

      setTimeout(() => {
        document.getElementById('roomTitle').textContent = data.name;
        document.getElementById('roomType').textContent = data.type;
        document.getElementById('roomTotal').textContent = data.totalSqFt;
        document.getElementById('roomInterior').textContent = data.interiorSqFt;
        document.getElementById('roomTerrace').textContent = data.terraceSqFt;
        document.getElementById('roomExposure').textContent = data.exposure;
        document.getElementById('roomDesc').textContent = data.description;
        document.getElementById('roomPrice').textContent = data.priceStarting;
        
        const roomImg = document.getElementById('roomImage');
        if (roomImg) {
          roomImg.src = data.image;
          roomImg.alt = data.name;
        }

        const featuresList = document.getElementById('roomFeatures');
        if (featuresList) {
          featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
        }

        // Update book button data
        const bookBtn = document.getElementById('btnBookSelectedRoom');
        if (bookBtn) {
          bookBtn.setAttribute('data-preselect-room', data.id);
        }

        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 250);
    });
  });
}

// 4. Default Dates for Booking Bar
function initBookingBarDates() {
  const checkinInput = document.getElementById('barCheckIn');
  const checkoutInput = document.getElementById('barCheckOut');
  
  if (checkinInput && checkoutInput) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 2);

    const formatDate = (d) => d.toISOString().split('T')[0];
    checkinInput.value = formatDate(today);
    checkoutInput.value = formatDate(tomorrow);
    checkinInput.min = formatDate(today);
    checkoutInput.min = formatDate(today);
  }
}

// 5. Booking / Reservation Modal Drawer
function initBookingModule() {
  const overlay = document.getElementById('bookingOverlay');
  const drawer = document.getElementById('bookingDrawer');
  const closeBtn = document.getElementById('bookingClose');
  const triggers = document.querySelectorAll('[data-open-booking]');
  const form = document.getElementById('bookingForm');
  const successState = document.getElementById('bookingSuccess');
  const resetBtn = document.getElementById('bookingReset');
  const roomSelect = document.getElementById('bookRoomType');

  if (!drawer || !overlay) return;

  const openBooking = (e, preselectId = null) => {
    if (e && e.preventDefault) e.preventDefault();

    // Check if target or event has preselected room
    const targetEl = e && e.currentTarget ? e.currentTarget : null;
    const roomToSelect = preselectId || (targetEl && targetEl.getAttribute('data-preselect-room'));
    if (roomToSelect && roomSelect) {
      roomSelect.value = roomToSelect;
    }

    overlay.classList.add('is-open');
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeBooking = (e) => {
    if (e) e.preventDefault();
    overlay.classList.remove('is-open');
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  triggers.forEach(t => {
    t.addEventListener('click', (e) => {
      const preselect = t.getAttribute('data-preselect-room');
      openBooking(e, preselect);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeBooking);
  overlay.addEventListener('click', closeBooking);

  // Hero Quick Booking Bar Submit
  const heroBookingBar = document.getElementById('heroBookingBar');
  if (heroBookingBar) {
    heroBookingBar.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedRoom = document.getElementById('barRoomSelect').value;
      openBooking(e, selectedRoom);
    });
  }

  // Handle Booking Form Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.form-submit-btn');
      submitBtn.textContent = 'Securing Reservation...';
      submitBtn.disabled = true;

      const randomId = 'AURA-' + Math.floor(1000 + Math.random() * 9000);
      const confNumberEl = document.getElementById('bookingConfNumber');
      if (confNumberEl) confNumberEl.textContent = randomId;

      setTimeout(() => {
        form.style.display = 'none';
        if (successState) {
          successState.classList.add('is-visible');
        }
        submitBtn.textContent = 'Confirm Reservation';
        submitBtn.disabled = false;
      }, 700);
    });
  }

  if (resetBtn && form && successState) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'flex';
      successState.classList.remove('is-visible');
    });
  }
}

// 6. Scroll Animations (IntersectionObserver)
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-section');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}

// 7. Accordions (Hotel Policies / Concierge Services)
function initAccordions() {
  const toggles = document.querySelectorAll('[data-accordion-toggle]');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = toggle.getAttribute('data-accordion-toggle');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.toggle('is-open');
        toggle.textContent = targetContent.classList.contains('is-open') 
          ? toggle.getAttribute('data-hide-text') || 'Hide Details -'
          : toggle.getAttribute('data-show-text') || 'View Details +';
      }
    });
  });
}

// 8. Smooth Scroll to Anchors
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}


// Dynamic Nightly Total Calculator
function setupBookingCalculator() {
  const checkIn = document.getElementById('bookCheckIn');
  const checkOut = document.getElementById('bookCheckOut');
  const roomSelect = document.getElementById('bookRoomType');
  const form = document.getElementById('bookingForm');
  
  if (!checkIn || !checkOut || !roomSelect || !form) return;

  let estimateBox = document.getElementById('bookingEstimateBox');
  if (!estimateBox) {
    estimateBox = document.createElement('div');
    estimateBox.id = 'bookingEstimateBox';
    estimateBox.style.cssText = 'background: rgba(194, 155, 56, 0.1); border: 1px solid rgba(194, 155, 56, 0.3); border-radius: 8px; padding: 14px 18px; margin: 10px 0; font-size: 0.9rem; color: #162026; display: flex; justify-content: space-between; align-items: center;';
    const submitBtn = form.querySelector('.form-submit-btn');
    if (submitBtn) {
      form.insertBefore(estimateBox, submitBtn);
    }
  }

  const updateEstimate = () => {
    if (!checkIn.value || !checkOut.value) {
      estimateBox.style.display = 'none';
      return;
    }
    const d1 = new Date(checkIn.value);
    const d2 = new Date(checkOut.value);
    const diffTime = d2 - d1;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      estimateBox.style.display = 'block';
      estimateBox.innerHTML = '<span style="color: #A65B32; font-weight: 600;">Check-out date must be after check-in date.</span>';
      return;
    }

    const roomId = roomSelect.value;
    const room = ROOMS_DATA.find(r => r.id === roomId);
    const rate = room ? room.priceNumber : 9500;
    const total = diffDays * rate;
    const formattedTotal = total.toLocaleString('en-IN');
    const formattedRate = rate.toLocaleString('en-IN');

    estimateBox.style.display = 'flex';
    estimateBox.innerHTML = `
      <div>
        <span style="font-size: 0.75rem; text-transform: uppercase; color: #5A6672; font-weight: 700; letter-spacing: 0.08em;">Stay Duration</span>
        <div style="font-weight: 700; color: #162026;">${diffDays} Night${diffDays > 1 ? 's' : ''} • ₹${formattedRate}/night</div>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 0.75rem; text-transform: uppercase; color: #5A6672; font-weight: 700; letter-spacing: 0.08em;">Estimated Total</span>
        <div style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 800; color: #C29B38;">₹${formattedTotal}</div>
      </div>
    `;
  };

  checkIn.addEventListener('change', updateEstimate);
  checkOut.addEventListener('change', updateEstimate);
  roomSelect.addEventListener('change', updateEstimate);

  // Set default dates if empty
  if (!checkIn.value) {
    const today = new Date();
    const future = new Date();
    future.setDate(today.getDate() + 2);
    checkIn.value = today.toISOString().split('T')[0];
    checkOut.value = future.toISOString().split('T')[0];
  }
  updateEstimate();
}
