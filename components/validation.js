export default class FormValidator {
  constructor(form) {
    this._inputSelector = ".form-control";
    this._submitButtonSelector = ".form-submit";
    this._inputErrorClass = "is-invalid";
    this._inputAccessClass = "is-valid";
    this._errorClass = "invalid-feedback";
    this._accessClass = "valid-feedback";
    this._form = form;
    this._allInputs = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._inputList = this._allInputs.slice(0, 2);
    this._textArea = this._allInputs.slice(-1);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  setDefaultForm() {
    this._toggleButton();
    this._inputList.forEach((input) => {
      this._showInputSuccess(input);
    });
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(`#${input.name}`);
    input.classList.add(this._inputErrorClass);
    input.classList.remove(this._inputAccessClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputMessage(input) {
    const errorElement = this._form.querySelector(`#${input.name}`);
    input.classList.remove(this._inputErrorClass);
    input.classList.remove(this._inputAccessClass);
    errorElement.textContent = "";
  }

  _showInputSuccess(input) {
    const errorElement = this._form.querySelector(`#${input.name}`);
    input.classList.remove(this._inputErrorClass);
    input.classList.add(this._inputAccessClass);
    errorElement.textContent = "";
  }

  _checkInputValidity = (input) => {
    if (!input.value) {
      this._hideInputMessage(input);
      return;
    }
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._showInputSuccess(input);
    }
  };

  _hasInvalidInputs() {
    return this._inputList.some((input) => !input.validity.valid);
  }

  _toggleButton = () => {
    if (this._hasInvalidInputs()) {
      this._submitButton.disabled = true;
    } else {
      this._submitButton.disabled = false;
    }
  };

  _sendMessage = () => {
    const [name, email, text] = this._allInputs.map((i) => i.value);
    mandrill(
      "/messages/send",
      {
        message: {
          to: [{ email: "g28xyz@ya.ru", name: name }],
          from_email: email,
          subject: "From resume",
          text: text,
        },
      },
      function (error, response) {
        //uh oh, there was an error
        if (error) console.log(JSON.stringify(error));
        //everything's good, lets see what mandrill said
        else console.log(response);
      }
    );
    this._form.reset();
  };

  _setEventListeners() {
    this._submitButton.addEventListener("click", this._sendMessage);
    this._inputList.forEach((input) =>
      input.addEventListener("input", () => {
        this._toggleButton();
        this._checkInputValidity(input);
      })
    );
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
