const form = document.getElementById("form");
const firstName = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("mobile");
const resturantName = document.getElementById("resturantName");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const emailValue = email.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const resturantNameValue = resturantName.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First name is required");
  } else {
    setSuccess(firstName);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Phone number is required");
  } else if (phoneNumberValue.length < 10) {
    setError(phoneNumber, "PhoneNumber must be at least 10 numbers");
  } else {
    setSuccess(phoneNumber);
  }

  if (resturantNameValue === "") {
    setError(resturantName, "Resturant name is required");
  } else {
    setSuccess(resturantName);
  }
};
