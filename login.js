document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Simple validation
  if (username === "" || password === "") {
    errorMessage.textContent = "Username and password are required.";
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long.";
    return;
  }

  // Simulate login (replace with real backend logic)
  if (username === "admin" && password === "password123") {
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";
    // Redirect or do something else here
  } else {
    errorMessage.style.color = "red";
    errorMessage.textContent = "Invalid username or password.";
  }
});
