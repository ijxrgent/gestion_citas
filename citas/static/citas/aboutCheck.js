const checkboxes = document.querySelectorAll(".check_status");
const button = document.querySelector(".btn_next");

// Función para verificar si algún checkbox está marcado
const toggleButtonState = () => {
  const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
  if (isChecked) {
    button.classList.remove("active");
    button.disabled = false;
  } else {
    button.classList.add("active");
    button.disabled = true;
  }
};

// Escucha los cambios en todos los checkboxes
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", toggleButtonState);
});

// Estado inicial
toggleButtonState();
