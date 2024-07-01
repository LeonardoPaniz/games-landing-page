document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('user-email');
    const submitButton = document.getElementById('newsletter-btn');
    const formEmail = document.getElementById('newsletter-form');
  
    emailInput.addEventListener('input', function() {
      const email = emailInput.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailPattern.test(email)) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    });
    formEmail.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = emailInput.value;
      localStorage.setItem('userEmail', email);
      alert('E-mail salvo com sucesso!');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formControls = contactForm.getElementsByClassName('form-control');
    let formsValid = [false, false, false, false];

    const namePattern = /[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messagePattern = /.{10,}/;
  
      formControls[0].addEventListener('input', function() {
        let firstNameValue = formControls[0].value.trim();
        formsValid[0] = namePattern.test(firstNameValue);
        formIsValid(formsValid);
      });
      formControls[1].addEventListener('input', function() {
        let lastNameValue = formControls[1].value.trim();
        formsValid[1] = namePattern.test(lastNameValue);
        formIsValid(formsValid);
      });
      formControls[2].addEventListener('input', function() {
        let emailValue = formControls[2].value.trim();
        formsValid[2] = emailPattern.test(emailValue);
        formIsValid(formsValid);
      });
      formControls[3].addEventListener('input', function() {
        let messageValue = formControls[3].value.trim();
        formsValid[3] = messagePattern.test(messageValue);
        formIsValid(formsValid);
      });

      function formIsValid(formsValid) {
        console.log(formsValid);
        console.log(formsValid.every(valid => valid));
    
        const submitButton = document.getElementById('form-button-submit');
        if (formsValid.every(valid => valid)) {
          submitButton.disabled = false;
        }
      }
  });

  function addUser() {
    event.preventDefault();
    const formControls = document.getElementsByClassName('form-control');   
    class User {
        constructor(firstName, lastName, email, message) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.message = message;
        }
    }

    const user = new User(
        formControls[0].value,
        formControls[1].value,
        formControls[2].value,
        formControls[3].value
    );

    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'listDataUser.html';
}
