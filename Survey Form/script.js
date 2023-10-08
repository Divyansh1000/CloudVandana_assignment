function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelectorAll("input[name='gender']:checked");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobile) {
      document.getElementById("resultFirstName").textContent = firstName;
      document.getElementById("resultLastName").textContent = lastName;
      document.getElementById("resultDob").textContent = dob;
      document.getElementById("resultCountry").textContent = country;
      document.getElementById("resultGender").textContent = Array.from(gender).map(el => el.value).join(', ');
      document.getElementById("resultProfession").textContent = profession;
      document.getElementById("resultEmail").textContent = email;
      document.getElementById("resultMobile").textContent = mobile;

      document.getElementById("popup").style.display = "block";
    } else {
      alert("Please fill in all required fields.");
    }
  }

  function resetForm() {
    document.getElementById("surveyForm").reset();
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
  }