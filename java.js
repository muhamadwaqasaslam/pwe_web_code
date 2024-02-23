function myFunction() {
    let name = document.getElementById('name').value
    let password = document.getElementById('password').value
    let retype_password = document.getElementById('retype-password').value
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
  
    // To ensure that no field should be empty
    if (name == '') {
      alert('Name is empty')
    }
    if (password == '') {
      alert('Password is empty')
    }
    if (retype_password == '') {
      alert('Retype Rassword is empty')
    }
    if (phone == '') {
      alert('Phone is empty')
    }
    if (email == '') {
      alert('Email is empty')
    }
  
    if (!isNaN(name)) {
      alert('Only enter alphabets during write the in name')
    }
  
    if (password.length < 6) {
      alert('Password must contains at least 6 characters')
    }
  
    if (password != retype_password) {
      alert('Retype password must be equal to the password')
    }
  
    if (isNaN(phone)) {
      alert('Phone number must only contains digits')
    }
  
    if (phone.length != 11) {
      alert('Phone number must contains at least 11 digits')
    }

  }