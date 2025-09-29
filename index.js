const form = document.getElementById("customerForm");
const modal = document.getElementById("successModal");
const selectHowHear = document.getElementById("howHear");
const otherSpecify = document.getElementById("otherSpecifyField");
const allFieldsets = document.querySelectorAll("fieldset");

form.addEventListener("submit", onSubmit);

selectHowHear.addEventListener("change", () => {
  if (selectHowHear.value === "Other") {
    otherSpecify.style.display = "block";
  } else {
    otherSpecify.style.display = "none";
  }
});

allFieldsets.forEach((fieldset) => {
  const inputs = fieldset.querySelectorAll(
    "input[required], select[required], input[id=email]"
  );
  inputs.forEach((input) =>
      input.addEventListener("change", () => {
        validateFields(fieldset);
      })
    );
});

function validateFields(fieldset) {
  const inputs = fieldset.querySelectorAll(
    "input[required], select[required], input[id=email]"
  );
  if (!inputs.length) {
    return true;
  }
  let isFieldsetValid = true;
  let errorMessageText = "This field is required";
  inputs.forEach((input) => {
    const isRequired = input.required && input.id !== "otherSpecify";
    if (isRequired && !input.value.trim()) {
      isFieldsetValid = false;
      errorMessageText = "This field is required";
    } else if (selectHowHear.value === "Other") {
      if (input.id === "otherSpecify" && !input.value.trim()) {
        isFieldsetValid = false;
        errorMessageText = "This field is required";
      }
    } else if (
      input.id === "email" &&
      input.value.trim() &&
      !isValidEmail(input.value.trim())
    ) {
      isFieldsetValid = false;
      errorMessageText = "Enter valid email";
    } else if (
      input.id === "phone" &&
      input.value.trim() &&
      !isValidPhone(input.value.trim())
    ) {
      isFieldsetValid = false;
      errorMessageText = "Enter valid phone";
    }
  });

  if (!isFieldsetValid) {
    fieldset.classList.add("error-background");
    const errorMessage = fieldset.querySelector(".error-message");

    if (errorMessage) {
      errorMessage.textContent = errorMessageText;
      errorMessage.style.display = "flex";
    }

    return false;
  } else {
    fieldset.classList.remove("error-background");
    fieldset.classList.add("success-background");
    const errorMessage = fieldset.querySelector(".error-message");
    if (errorMessage) {
      errorMessage.style.display = "none";
    }

    return true;
  }
}

function onSubmit(event) {
  event.preventDefault();
  let formIsValid = true;

  allFieldsets.forEach((fieldset) => {
    const isValid = validateFields(fieldset);
    if (formIsValid) {
      formIsValid = isValid;
    }
  });
  if (formIsValid) {
    const formData = new FormData(form);
    const data = {};
    for (let [key, value] of formData) {
      if (key === "recommend") {
        data[key] = data[key] ? [...data[key], value] : [value];
      } else {
        data[key] = value;
      }
    }
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    toggleModal();
    form.reset();
    otherSpecify.style.display = "none";
  } else {
    const errorBlock = document.querySelector(".error-background");
    errorBlock.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\d+$/;
  return phoneRegex.test(phone);
}

function toggleModal() {
  if (modal) {
    const displayValue = modal.style.display;
    modal.style.display = displayValue === "none" ? "flex" : "none";
  }
}

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    toggleModal();
  }
});
