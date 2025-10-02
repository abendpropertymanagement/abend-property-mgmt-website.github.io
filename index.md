---
layout: default
title: Remote Airbnb Management
---

<section class="section hero">
  <div class="container">
    <h1>Remote Airbnb Management</h1>
    <p>Referral-based services tailored for short-term rental hosts.</p>
    <a href="#contact" class="btn">GET STARTED</a>
  </div>
</section>

<section class="section" id="services">
  <div class="container">
    <h2>Services</h2>
    <div class="grid grid-3" style="margin-top:14px">
      <article class="card">
        <svg class="icon"><use href="#icon-chat"/></svg>
        <h3>Guest Communication</h3>
        <p>Handling all messages and guest communication to ensure a seamless experience.</p>
      </article>
      <article class="card">
        <svg class="icon"><use href="#icon-up"/></svg>
        <h3>Listing Optimization</h3>
        <p>Improving your property’s visibility and conversion with better photos, copy, and pricing.</p>
      </article>
      <article class="card">
        <svg class="icon"><use href="#icon-home"/></svg>
        <h3>Property Care</h3>
        <p>Coordinating maintenance and housekeeping with reliable local partners.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container twocol">
    <div>
      <h2>About</h2>
      <p>Established in 2025. Referral-only business.</p>
    </div>
    <div>
      <h2>Bespoke Process</h2>
      <p><strong>Initial Consultation</strong> — We learn your goals and constraints.</p>
      <p><strong>Customized Plan</strong> — We propose a care plan tailored to your property.</p>
      <p><strong>Ongoing Stewardship</strong> — We monitor performance and refine continually.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <h2>Review</h2>
    <blockquote class="quote">
      “Professional, proactive, and truly remote-friendly. I could step back and trust the results.”
      <cite>— Patrice A.</cite>
    </blockquote>
  </div>
</section>

<section class="section" id="faq">
  <div class="container">
    <h2>FAQ</h2>
    <dl class="faq">
      <dt>How do you handle guest communications?</dt>
      <dd>We respond promptly, professionally, and consistently across platforms to protect ratings and guest experience.</dd>
      <dt>What is your commission structure?</dt>
      <dd>We operate on a simple, transparent referral-only model discussed during the initial consultation.</dd>
    </dl>
  </div>
</section>

<section class="section" id="contact">
  <div class="container">
    <h2>Contact Us</h2>
    <div class="form" style="margin-top:12px">
      <!--
        FORM HANDLING (Formspree):
        1) Go to https://formspree.io/ and create a form.
        2) Set the recipient email to abendpropertymanagement@gmail.com.
        3) Replace the action URL below with your Formspree endpoint.
           Example: https://formspree.io/f/xxxxxyyy
      -->
      <form id="contact-form" action="https://formspree.io/f/REPLACE_WITH_YOUR_ENDPOINT" method="POST">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" autocomplete="name" required />

        <label for="email">Email</label>
        <input id="email" name="_replyto" type="email" autocomplete="email" required />

        <label for="location">Property Location</label>
        <input id="location" name="location" type="text" required />

        <label for="message">Message <span class="muted" aria-hidden="true">(optional)</span></label>
        <textarea id="message" name="message" placeholder="Tell us about your property…"></textarea>

        <button class="btn" type="submit">SEND</button>
        <div id="form-status" class="form-status" aria-live="polite"></div>
      </form>
      <p class="muted" style="margin-top:10px;color:#5F6368">
        Prefer email? <a href="mailto:abendpropertymanagement@gmail.com">abendpropertymanagement@gmail.com</a>
      </p>
    </div>
  </div>
</section> 