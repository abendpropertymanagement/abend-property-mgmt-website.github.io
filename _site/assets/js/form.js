(function(){
  const form = document.getElementById('contact-form');
  if(!form) return;
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Sending...';
    status.className = 'form-status';
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      if (res.ok) {
        form.reset();
        status.textContent = "Thanks! We’ll get back to you shortly.";
        status.className = 'form-status success';
      } else {
        status.textContent = "Something went wrong. Please try again or email us directly.";
        status.className = 'form-status error';
      }
    } catch(err){
      status.textContent = "Something went wrong. Please try again or email us directly.";
      status.className = 'form-status error';
    }
  });
})(); 