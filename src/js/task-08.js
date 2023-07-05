const getLoginForm = document.querySelector(".login-form");

getLoginForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (!email.value || !password.value.trim()) {
    alert(
      "It seems that you did not fill out a required field in the form. Make sure you have provided the required information for all fields."
    );
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  getLoginForm.reset();
}
