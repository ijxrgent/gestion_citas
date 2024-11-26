const btnNext = document.querySelector(".btn_next");
const containerCheckbox = document.querySelector(".container_checkbox");
const title = document.querySelector(".h1_title");

// Nuevo contenido para mostrar los especialistas
const especialistasHTML = `
  <div class="grupo_ch">
    <label for="check_lb">
      <input type="radio" name="checkM" class="check_status" />Medicina General
      <i class="fa-solid fa-user-doctor"></i>
    </label>
  </div>
  <div class="grupo_ch">
    <label for="check_lb">
      <input type="radio" name="checkM" class="check_status" />Odontología
      <i class="fa-solid fa-tooth"></i>
    </label>
  </div>
  <div class="grupo_ch">
    <label for="check_lb">
      <input type="radio" name="checkM" class="check_status" />Optometría
      <i class="fa-solid fa-glasses"></i>
    </label>
  </div>
  <div class="grupo_ch">
    <label for="check_lb">
      <input type="radio" name="checkM" class="check_status" />Cardiología
      <i class="fa-solid fa-heart-pulse"></i>
    </label>
  </div>
  <div class="container_btn">
    <button type="button" class="btn_ok active">OK <i class="fa-solid fa-circle-check"></i>
    </button>
  </div>
`;

// Manejar el evento del botón "Siguiente"
btnNext.addEventListener("click", () => {
  const selectedH = document.querySelector('input[name^="check"]:checked');
  localStorage.setItem("selectedH", selectedH.nextSibling.textContent.trim());
  containerCheckbox.innerHTML = especialistasHTML;
  title.textContent = "ELIJA AL ESPECIALISTA";

  let checkboxes = document.querySelectorAll(".check_status");
  const btnOk = document.querySelector(".btn_ok");

  const toggleButtonState = () => {
    const isChecked = Array.from(checkboxes).some(
      (checkbox) => checkbox.checked
    );
    if (isChecked) {
      btnOk.classList.remove("active");
      btnOk.disabled = false;
    } else {
      btnOk.classList.add("active");
      btnOk.disabled = true;
    }
  };

  // Escucha los cambios en todos los checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", toggleButtonState);
  });

  // Estado inicial
  toggleButtonState();

  //redirigir al archivo de cita aceptada
  btnOk.addEventListener("click", () => {
    const selectedM = document.querySelector('input[name^="checkM"]:checked');
    if (selectedH && selectedM) {
      // Guardar los valores seleccionados en localStorage
      localStorage.setItem(
        "selectedM",
        selectedM.nextSibling.textContent.trim()
      );
      console.log(selectedH);
      console.log(selectedM);
      window.location.href = "/accepted/";
    } else {
      alert("Por favor selecciona un centro médico y un especialista.");
    }
  });
});
