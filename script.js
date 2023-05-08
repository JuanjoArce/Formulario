const form = document.getElementById("contact-form");
const formDataContainer = document.getElementById("form-data");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const data = {
    name: name,
    email: email,
    message: message
  };
  const newDataElement = document.createElement("div");
  newDataElement.innerHTML = `<p>Nombre: ${data.name}</p><p>Correo electrónico: ${data.email}</p><p>Mensaje: ${data.message}</p>`;
  formDataContainer.appendChild(newDataElement);
  form.reset();
});
