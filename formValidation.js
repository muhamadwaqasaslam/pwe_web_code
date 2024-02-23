document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        var nameInput = document.querySelector('input[name="Name"]');
        var passwordInput = document.querySelector('input[name="Password"]');
        var retypePasswordInput = document.querySelector('input[name="RetypePassword"]');
        var phoneInput = document.querySelector('input[name="Phone"]');
        var emailInput = document.querySelector('input[name="Email"]');

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Please enter your name.");
            event.preventDefault();
        } else {
            hideError(nameInput);
        }

        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Please enter your password.");
            event.preventDefault();
        } else {
            hideError(passwordInput);
        }

        if (retypePasswordInput.value.trim() === "") {
            showError(retypePasswordInput, "Please retype your password.");
            event.preventDefault();
        } else {
            hideError(retypePasswordInput);
        }

        if (phoneInput.value.trim() === "") {
            showError(phoneInput, "Please enter your phone number.");
            event.preventDefault();
        } else {
            hideError(phoneInput);
        }

        if (emailInput.value.trim() === "") {
            showError(emailInput, "Please enter your email address.");
            event.preventDefault();
        } else {
            hideError(emailInput);
        }
    });

    function showError(inputElement, errorMessage) {
        var errorSpan = document.createElement("span");
        errorSpan.className = "error-message";
        errorSpan.textContent = errorMessage;

        var parentElement = inputElement.parentElement;
        parentElement.appendChild(errorSpan);
    }

    function hideError(inputElement) {
        var parentElement = inputElement.parentElement;
        var errorSpan = parentElement.querySelector(".error-message");
        if (errorSpan) 
        {
            parentElement.removeChild(errorSpan);
        }
    }
});