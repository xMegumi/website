function generateRandomPassword() {
    const length = 18;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  function displayRandomPassword(clear = false) {
    const passwordDisplay = document.getElementById('password-display');
    const password = generateRandomPassword();
    passwordDisplay.value = password;
  }
  
  const generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', displayRandomPassword);
  
  function copyPasswordToClipboard() {
    const passwordDisplay = document.getElementById('password-display');
    passwordDisplay.select();
    document.execCommand('copy');
    showCopiedMessage(); 
  }

  const passwordDisplay = document.getElementById('password-display');
  passwordDisplay.addEventListener('click', copyPasswordToClipboard); // Call the copyPasswordToClipboard function on click
  
  document.addEventListener('DOMContentLoaded', () => {

  });


  
  displayRandomPassword(true); // Use "true" in lowercase
  