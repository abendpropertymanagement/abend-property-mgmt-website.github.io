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
        try {
          const data = await res.json();
          if (data && data.errors && data.errors.length) {
            status.textContent = data.errors.map(e => e.message).join(" ");
          } else {
            status.textContent = "Form error. Please verify the endpoint is active and try again.";
          }
        } catch (_) {
          status.textContent = "Form error. Please verify the endpoint is active and try again.";
        }
        status.className = 'form-status error';
      }
    } catch(err){
      status.textContent = "Something went wrong. Please try again or email us directly.";
      status.className = 'form-status error';
    }
  });
})(); 