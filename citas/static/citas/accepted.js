document.addEventListener("DOMContentLoaded", () => {
  // Obtén los valores del Local Storage
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userid");

  // Asigna los valores a las etiquetas <p>
  document.getElementById("nameAccepted").textContent = `${username}`;
  document.getElementById("idAccepted").textContent = `${userid}`;

  //radio buttons
  const medicalCenter =
    localStorage.getItem("selectedH") || "Centro médico no seleccionado";
  const specialist =
    localStorage.getItem("selectedM") || "Especialista no seleccionado";

  // Mostrar en el DOM
  document.getElementById("medical_center").textContent = medicalCenter;
  document.getElementById("especialist").textContent = specialist;
});
