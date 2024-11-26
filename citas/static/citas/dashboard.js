document.addEventListener("DOMContentLoaded", () => {
  // Obtén los valores del Local Storage
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userid");

  // Asigna los valores a las etiquetas <p>
  document.getElementById("nameDash").textContent = `Nombre: ${username}`;
  document.getElementById("idDash").textContent = `ID: ${userid}`;
});
