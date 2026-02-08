// Main JS for Celeste Royale
document.addEventListener('DOMContentLoaded', () => {
  // Toast notification system
  function showToast(msg, type='success', duration=3000){
    const container = document.querySelector('.toast-container') || (() => {
      const c = document.createElement('div'); c.className='toast-container'; document.body.appendChild(c); return c;
    })();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), duration);
  }

  // Scroll reveal animations
  const observerOptions = { threshold:0.1, rootMargin:'0px 0px -80px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('active'); observer.unobserve(entry.target); }
    });
  }, observerOptions);
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Navbar scroll animation
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 60) header.classList.add('scrolled'); else header.classList.remove('scrolled');
    if(window.scrollY > 400) scrollTopBtn.style.display = 'flex'; else scrollTopBtn.style.display = 'none';
  });

  // Scroll to top
  scrollTopBtn?.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

  // Newsletter form
  const newsForm = document.getElementById('newsForm');
  if(newsForm){
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsForm.querySelector('input[type="email"]').value.trim();
      if(!email || !/\S+@\S+\.\S+/.test(email)){ showToast('Please enter a valid email.', 'error'); return; }
      showToast('Thank you for subscribing!', 'success');
      newsForm.reset();
    });
  }

  // Simple gallery lightbox
  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', e => {
      const src = e.currentTarget.dataset.src || e.currentTarget.src;
      openLightbox(src);
    });
  });

  function openLightbox(src){
    const lb = document.createElement('div'); lb.className='lightbox';
    const closeBtn = document.createElement('button'); closeBtn.type='button'; closeBtn.className='close'; closeBtn.setAttribute('aria-label','Close image'); closeBtn.innerHTML='✕';
    const image = document.createElement('img'); image.src = src; image.alt='Gallery image'; image.loading='eager';
    lb.appendChild(closeBtn); lb.appendChild(image); document.body.appendChild(lb);
    closeBtn.addEventListener('click', ()=>lb.remove());
    lb.addEventListener('click', e=>{ if(e.target===lb) lb.remove(); });
  }

  // Booking form validation & pricing (if present)
  const bookingForm = document.getElementById('bookingForm');
  if(bookingForm){
    const roomSelect = bookingForm.querySelector('#roomType');
    const nightsInput = bookingForm.querySelector('#nights');
    const guestsInput = bookingForm.querySelector('#guests');
    const priceDisplay = bookingForm.querySelector('#priceTotal');

    function calcPrice(){
      const rates = { 'deluxe':320, 'suite':580, 'villa':1200 };
      const room = roomSelect.value || 'deluxe';
      const nights = Math.max(1,parseInt(nightsInput.value||1));
      const guests = Math.max(1,parseInt(guestsInput.value||1));
      let base = rates[room] || 320;
      const supplement = Math.max(0,guests-2) * 50 * nights;
      const subtotal = base * nights + supplement;
      priceDisplay.textContent = `$${subtotal.toLocaleString()}`;
      return subtotal;
    }

    roomSelect?.addEventListener('change', calcPrice);
    nightsInput?.addEventListener('input', calcPrice);
    guestsInput?.addEventListener('input', calcPrice);
    calcPrice();

    bookingForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const checkIn = bookingForm.querySelector('#checkin').value;
      const checkout = bookingForm.querySelector('#checkout').value;
      if(!checkIn || !checkout){ showToast('Please select check-in and check-out dates.', 'error'); return; }
      showToast('Booking inquiry submitted. Our reservations team will contact you.', 'success');
      bookingForm.reset(); calcPrice();
    });
  }

  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const msg = contactForm.querySelector('#message').value.trim();
      if(!name || !email || !msg){ showToast('Please complete all required fields.', 'error'); return; }
      if(!/\S+@\S+\.\S+/.test(email)){ showToast('Please enter a valid email.', 'error'); return; }
      showToast('Message sent. We will reply shortly.', 'success');
      contactForm.reset();
    });
  }

  // Gift card selection
  document.querySelectorAll('.gift-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.gift-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  // Lazy loading enhancement
  if('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[loading="lazy"]').forEach(img=>{ img.src = img.dataset.src || img.src; });
  } else {
    const obs = new IntersectionObserver((entries, o)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ const img = entry.target; img.src = img.dataset.src || img.src; o.unobserve(img); }
      });
    },{rootMargin:'200px'});
    document.querySelectorAll('img[loading="lazy"]').forEach(img=>obs.observe(img));
  }
});
