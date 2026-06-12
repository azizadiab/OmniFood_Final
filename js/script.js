// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const plan = document.getElementById("plan").value;

  const response = await fetch(
    "https://omnifood.runasp.net/api/OmniFood/Register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        passwordHash: password,
        planId: parseInt(plan),
      }),
    },
  );
  const errorMessage = await response.text();
  if (!response.ok) {
    alert(errorMessage);
    return;
  }

  alert("User registered successfully");
  registerForm.reset();
});

const signin = document.getElementById("login-form");
signin.addEventListener("submit", async function (event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const response = await fetch(
    "https://omnifood.runasp.net/api/OmniFood/Login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    },
  );

  const errorMessage = await response.text();
  if (!response.ok) {
    alert(errorMessage);
    return;
  }
  alert("Login successfully");
  signin.reset();
});
