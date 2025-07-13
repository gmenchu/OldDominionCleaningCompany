// Estimate form feedback
document.getElementById('estimate-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = 'Thank you! Your request has been received.';
  this.reset();
});

// Contact form feedback
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you, ' + this.name.value + '! Your message has been sent.');
  this.reset();
});

// Modal open/close
const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const modalCloseBtn = document.getElementById('modalCloseBtn');

openModalBtn?.addEventListener('click', () => modalOverlay.classList.add('active'));
modalCloseBtn?.addEventListener('click', () => modalOverlay.classList.remove('active'));
modalOverlay?.addEventListener('click', e => {
  if (e.target === modalOverlay) modalOverlay.classList.remove('active');
});

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
    modalOverlay.classList.remove('active');
  }
});

// Booking form submit
document.getElementById('booking-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('booking-status').textContent = "Thanks! We'll be in touch shortly.";
  this.reset();
  setTimeout(() => modalOverlay.classList.remove('active'), 3000);
});
