/**
 * AURA Cafe - Main UI Controller
 */
(() => {
  'use strict';

  /**
   * @param {string} selector
   * @param {ParentNode} [context=document]
   * @returns {Element | null}
   */
  const $ = (selector, context = document) => context.querySelector(selector);

  /**
   * @param {string} selector
   * @param {ParentNode} [context=document]
   * @returns {Element[]}
   */
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  // WhatsApp Contact Number for Orders/Reservations
  const WHATSAPP_PHONE_NUMBER = '15550192834';

  /**
   * --- Throttled Frame Helper ---
   * @template {any[]} T
   * @param {(...args: T) => void} callback
   * @returns {(...args: T) => void}
   */
  function requestThrottledFrame(callback) {
    let ticking = false;
    return (...args) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          callback(...args);
          ticking = false;
        });
        ticking = true;
      }
    };
  }

  /**
   * --- Helper: Validate International/Standard Phone Number ---
   * @param {string} phoneStr
   * @returns {boolean}
   */
  function isValidPhoneNumber(phoneStr) {
    const digitsOnly = phoneStr.replace(/\D/g, '');
    return digitsOnly.length >= 10 && digitsOnly.length <= 15;
  }

  /**
   * --- Safe Native Dialog Helpers ---
   * @param {HTMLDialogElement | null} dialogElement
   * @returns {void}
   */
  function openDialog(dialogElement) {
    if (!dialogElement) return;
    if (!dialogElement.open) {
      if (typeof dialogElement.showModal === 'function') {
        dialogElement.showModal();
      } else {
        dialogElement.setAttribute('open', '');
      }
    }
    document.body.classList.add('no-scroll');
  }

  /**
   * @param {HTMLDialogElement | null} dialogElement
   * @returns {void}
   */
  function closeDialog(dialogElement) {
    if (!dialogElement) return;
    if (dialogElement.open) {
      if (typeof dialogElement.close === 'function') {
        dialogElement.close();
      } else {
        dialogElement.removeAttribute('open');
      }
    }
    document.body.classList.remove('no-scroll');
  }

  // --- 1. Header Scroll Controller ---
  const header = $('#header');
  if (header) {
    const handleScroll = requestThrottledFrame(() => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // --- 2. ScrollSpy (Active Navigation Link) ---
  const sections = $$('section[id]');   const navLinks = $$('.mobile-menu-link');

  if (sections.length > 0 && navLinks.length > 0) {
    const highlightNavOnScroll = requestThrottledFrame(() => {
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        const top = /** @type {HTMLElement} */ (section).offsetTop;
        const height = /** @type {HTMLElement} */ (section).offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            const isMatch = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isMatch);
            if (isMatch) link.setAttribute('aria-current', 'page');
            else link.removeAttribute('aria-current');
          });
        }
      });
    });
    window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
  }

  // --- 3. Mobile Nav Drawer Controller ---
  const mobileToggle = $('#mobile-toggle-btn');
  const mobileClose = $('#mobile-close-btn');
  const mobileDrawer = $('#mobile-drawer');
  const mobileOverlay = $('#mobile-overlay');

  if (mobileToggle && mobileDrawer && mobileOverlay) {
    /** @type {Element | null} */
    let lastActiveElement = null;

    /**
     * @param {boolean} [isOpen]
     * @returns {void}
     */
    const toggleMobileMenu = (isOpen) => {
      const active = Boolean(isOpen);
      if (active) {
        lastActiveElement = document.activeElement;
      }

      mobileDrawer.classList.toggle('active', active);
      mobileOverlay.classList.toggle('active', active);

      mobileToggle.setAttribute('aria-expanded', active.toString());
      mobileDrawer.setAttribute('aria-hidden', (!active).toString());
      document.body.classList.toggle('no-scroll', active);

      if (active) {
        if (mobileClose && 'focus' in mobileClose) {
          /** @type {HTMLElement} */ (mobileClose).focus();
        }
      } else if (lastActiveElement && 'focus' in lastActiveElement) {
        /** @type {HTMLElement} */ (lastActiveElement).focus();
      }
    };

    mobileToggle.addEventListener('click', () => toggleMobileMenu(true));
    if (mobileClose) mobileClose.addEventListener('click', () => toggleMobileMenu(false));
    mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));

    /**
     * @param {KeyboardEvent} e
     * @returns {void}
     */
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
        toggleMobileMenu(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleDrawerClick = (e) => {
      const target = /** @type {Element} */ (e.target);
      const link = target.closest('a');
      if (!link) return;

      $$('.mobile-menu-link', mobileDrawer).forEach((l) => l.classList.remove('active'));
      link.classList.add('active');

      toggleMobileMenu(false);
    };
    mobileDrawer.addEventListener('click', handleDrawerClick);
  }

  // --- 4. Menu Category Filter ---
  const categoryContainer = $('.category-filter-container');   const foodCards = $$('.food-card');

  if (categoryContainer && foodCards.length > 0) {
    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleCategoryClick = (e) => {
      const target = /** @type {Element} */ (e.target);
      const btn = target.closest('.category-btn');
      if (!btn) return;

      $$('.category-btn', categoryContainer).forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter') || 'all';

      foodCards.forEach((card) => {
        const matches = filterValue === 'all' || card.getAttribute('data-category') === filterValue;
        /** @type {HTMLElement} */ (card).hidden = !matches;
        /** @type {HTMLElement} */ (card).style.display = matches ? 'flex' : 'none';
      });
    };
    categoryContainer.addEventListener('click', handleCategoryClick);
  }

  // --- 5. Gallery Lightbox ---
  const lightbox = /** @type {HTMLDialogElement | null} */ ($('#lightbox'));
  const lightboxImg = /** @type {HTMLImageElement | null} */ ($('#lightbox-img'));
  const galleryContainer = $('.gallery-grid');
  /** @type {Element | null} */
  let lightboxTriggerElement = null;

  if (lightbox && galleryContainer) {
    /**
     * @param {boolean} isOpen
     * @param {string} [imgSrc='']
     * @param {string} [imgAlt='']
     * @returns {void}
     */
    const toggleLightbox = (isOpen, imgSrc = '', imgAlt = '') => {
      if (isOpen) {
        lightboxTriggerElement = document.activeElement;
        if (lightboxImg) {
          lightboxImg.src = imgSrc;
          lightboxImg.alt = imgAlt;
        }
        openDialog(lightbox);
        const closeBtn = $('#lightbox-close');
        if (closeBtn && 'focus' in closeBtn) {
          /** @type {HTMLElement} */ (closeBtn).focus();
        }
      } else {
        closeDialog(lightbox);
        if (lightboxImg) {
          lightboxImg.src = '';
          lightboxImg.alt = '';
        }
        if (lightboxTriggerElement && 'focus' in lightboxTriggerElement) {
          /** @type {HTMLElement} */ (lightboxTriggerElement).focus();
        }
      }
    };

    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleGalleryClick = (e) => {
      const target = /** @type {Element} */ (e.target);
      const btn = target.closest('.gallery-item');
      if (!btn) return;

      const img = /** @type {HTMLImageElement | null} */ ($('img', btn));
      if (img) {
        toggleLightbox(true, img.src, img.alt);
      }
    };
    galleryContainer.addEventListener('click', handleGalleryClick);

    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleLightboxClick = (e) => {
      const target = /** @type {Element} */ (e.target);
      if (target.closest('#lightbox-close') || target === lightbox) {
        toggleLightbox(false);
      }
    };
    lightbox.addEventListener('click', handleLightboxClick);

    /**
     * @param {Event} e
     * @returns {void}
     */
    const handleLightboxCancel = (e) => {
      e.preventDefault();
      toggleLightbox(false);
    };
    lightbox.addEventListener('cancel', handleLightboxCancel);
  }

  // --- 6. Newsletter Form Handling ---
  const newsletterForm = /** @type {HTMLFormElement | null} */ ($('#newsletter-form'));
  if (newsletterForm) {
    /**
     * @param {SubmitEvent} e
     * @returns {Promise<void>}
     */
    const handleNewsletterSubmit = async (e) => {
      e.preventDefault();
      const form = /** @type {HTMLFormElement} */ (e.target);
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          alert('Thank you for subscribing to AURA!');
          newsletterForm.reset();
        } else {
          alert('Oops! There was a problem submitting your email.');
        }
      } catch (error) {
        alert('Oops! Network error. Please try again later.');
      }
    };
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }

  // --- 7. Table Reservation Modal ---
  const openResModalBtns = $$('.btn-reserve, #open-reserve-modal');
  const closeResModalBtn = $('#close-reserve-modal');
  const resModal = /** @type {HTMLDialogElement | null} */ ($('#reservation-modal'));
  const resForm = /** @type {HTMLFormElement | null} */ ($('#whatsapp-reservation-form'));

  if (resModal) {
    openResModalBtns.forEach((btn) => {
      /**
       * @param {Event} e
       * @returns {void}
       */
      const handleOpenModal = (e) => {
        e.preventDefault();
        openDialog(resModal);
      };
      btn.addEventListener('click', handleOpenModal);
    });

    if (closeResModalBtn) {
      closeResModalBtn.addEventListener('click', () => closeDialog(resModal));
    }

    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleResModalBackdropClick = (e) => {
      if (e.target === resModal) {
        closeDialog(resModal);
      }
    };
    resModal.addEventListener('click', handleResModalBackdropClick);

    if (resForm) {
      /**
       * @param {SubmitEvent} e
       * @returns {void}
       */
      const handleResSubmit = (e) => {
        e.preventDefault();

        const nameInput = /** @type {HTMLInputElement | null} */ ($('#res-name'));
        const phoneInput = /** @type {HTMLInputElement | null} */ ($('#res-phone'));
        const guestsInput = /** @type {HTMLInputElement | null} */ ($('#res-guests'));

        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const guests = guestsInput ? guestsInput.value.trim() : '';

        if (!isValidPhoneNumber(phone)) {
          alert('Please enter a valid phone number.');
          return;
        }

        const message = `Hello AURA Cafe! I would like to reserve a table.\n\n*Reservation Details:*\n• *Name:* ${name}\n• *Contact:* ${phone}\n• *Guests:* ${guests}`;
        window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        closeDialog(resModal);
        resForm.reset();
      };
      resForm.addEventListener('submit', handleResSubmit);
    }
  }

  // --- 8. Wi-Fi Modal ---
  const wifiModal = /** @type {HTMLDialogElement | null} */ ($('#wifi-modal'));
  const openWifiModalBtn = $('#open-wifi-modal');
  const closeWifiModalBtn = $('#close-wifi-modal');

  if (wifiModal) {
    if (openWifiModalBtn) {
      /**
       * @param {Event} e
       * @returns {void}
       */
      const handleOpenWifi = (e) => {
        e.preventDefault();
        openDialog(wifiModal);
      };
      openWifiModalBtn.addEventListener('click', handleOpenWifi);
    }

    if (closeWifiModalBtn) {
      closeWifiModalBtn.addEventListener('click', () => closeDialog(wifiModal));
    }

    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleWifiBackdropClick = (e) => {
      if (e.target === wifiModal) {
        closeDialog(wifiModal);
      }
    };
    wifiModal.addEventListener('click', handleWifiBackdropClick);
  }

  // --- 9. Food Order Modal ---
  const foodModal = /** @type {HTMLDialogElement | null} */ ($('#food-order-modal'));
  const closeFoodModalBtn = $('#close-food-modal');
  const foodOrderForm = /** @type {HTMLFormElement | null} */ ($('#food-whatsapp-order-form'));
  const foodModalItemTitle = $('#food-modal-item-name');
  const foodItemNameInput = /** @type {HTMLInputElement | null} */ ($('#food-item-name-input'));

  if (foodModal) {
    if (closeFoodModalBtn) {
      closeFoodModalBtn.addEventListener('click', () => closeDialog(foodModal));
    }

    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleFoodModalBackdropClick = (e) => {
      if (e.target === foodModal) {
        closeDialog(foodModal);
      }
    };
    foodModal.addEventListener('click', handleFoodModalBackdropClick);

    /**
     * @param {MouseEvent} e
     * @returns {void}
     */
    const handleGlobalOrderClick = (e) => {
      const target = /** @type {Element} */ (e.target);
      const btn = target.closest('.order-wa-btn');
      if (!btn) return;

      const itemName = btn.getAttribute('data-item-name') || 'Special Item';
      if (foodModalItemTitle) foodModalItemTitle.textContent = itemName;
      if (foodItemNameInput) foodItemNameInput.value = itemName;

      openDialog(foodModal);
    };
    document.addEventListener('click', handleGlobalOrderClick);

    if (foodOrderForm) {
      /**
       * @param {SubmitEvent} e
       * @returns {void}
       */
      const handleFoodOrderSubmit = (e) => {
        e.preventDefault();

        const item = foodItemNameInput ? foodItemNameInput.value.trim() : '';
        const nameInput = /** @type {HTMLInputElement | null} */ ($('#food-cust-name'));
        const phoneInput = /** @type {HTMLInputElement | null} */ ($('#food-cust-phone'));
        const qtyInput = /** @type {HTMLInputElement | null} */ ($('#food-cust-qty'));
        const addressInput = /** @type {HTMLInputElement | null} */ ($('#food-cust-address'));

        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const qty = qtyInput ? qtyInput.value.trim() : '1';
        const address = addressInput ? addressInput.value.trim() : '';

        if (!isValidPhoneNumber(phone)) {
          alert('Please enter a valid phone number.');
          return;
        }

        const message = `Hello AURA Cafe! I would like to place an order.\n\n*Order Details:*\n• *Item:* ${item}\n• *Quantity:* ${qty}\n\n*Customer Details:*\n• *Name:* ${name}\n• *Contact:* ${phone}\n• *Delivery Address:* ${address}`;
        window.open(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        closeDialog(foodModal);
        foodOrderForm.reset();
      };
      foodOrderForm.addEventListener('submit', handleFoodOrderSubmit);
    }
  }
})();
