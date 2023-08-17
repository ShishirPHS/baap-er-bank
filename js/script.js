document.getElementById("btn-submit").addEventListener("click", function () {
  const emailFelid = document.getElementById("user-email");
  const email = emailFelid.value;

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // Danger: do not verify email, password on the client side

  if (email === "" || password === "") {
    alert("Enter your email and password");
  } else {
    if (email === "test@gmail.com" && password === "secret") {
      window.location.href = "../bank.html";
    } else {
      alert("invalid user");
    }
  }
});
