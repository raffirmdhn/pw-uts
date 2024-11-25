document.addEventListener("DOMContentLoaded", function () {
  const buttonLogin = document.getElementById("btn-login-masuk");

  if (buttonLogin) {
    buttonLogin.addEventListener("click", function (e) {
      e.preventDefault();
      const username = document.getElementById("loginUsername")?.value;
      const password = document.getElementById("loginPassword")?.value;

      if (!username) {
        alert("Invalid username");
        return;
      }

      if (password != "123") {
        alert("Wrong password!")
        return;
      }

      localStorage.setItem("login-username", username);
      Swal.fire({
        title: "Login successfull!",
        text: "Page will reload soon!",
        icon: "success"
      }).then(res => {
        window.location.reload();
      });
    });
  }

  const loginUsername = localStorage.getItem("login-username");
  if (loginUsername) {
    const buttonMasuk = document.getElementById("button-masuk")
    const buttonKeluar = document.getElementById("button-keluar")
    buttonMasuk.classList.add("d-none")
    buttonKeluar.classList.remove("d-none")
    document.getElementById("username-show").textContent = loginUsername
  }

  const buttonKeluar = document.getElementById("button-keluar");
  buttonKeluar.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("login-username")
    window.location.reload();
  })
});
