document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("success");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    success.textContent = "";

    document.querySelectorAll("small").forEach(s => s.textContent = "");

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name) {
      document.getElementById("error-name").textContent = "Name is required.";
      valid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("error-email").textContent = "Enter a valid email.";
      valid = false;
    }
    if (!subject) {
      document.getElementById("error-subject").textContent = "Subject is required.";
      valid = false;
    }
    if (message.length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      success.textContent = "Message sent successfully!";
      form.reset();
    }
  });
});