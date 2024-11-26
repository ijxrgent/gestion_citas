document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("log").addEventListener("click", (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Obtén los valores de los inputs
    const username = document.getElementById("userName").value;
    const userid = document.getElementById("userId").value;

    if (username && userid) {
      localStorage.setItem("username", username);
      localStorage.setItem("userid", userid);

      // Redirige al dashboard
      window.location.href = "/dashboard/";
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
});
