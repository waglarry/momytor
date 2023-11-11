export function checkPasswordHealth(password) {
    const minLength = 8;
    const minUpperCase = 1;
    const minLowerCase = 1;
    const minNumbers = 1;
    const minSpecialChars = 1;
  
    let score = 0;
    const errors = [];
  
    // Check minimum length
    if (password?.length < minLength) {
      errors.push(`Password should be at least ${minLength} characters long`);
    } else {
      score++;
    }
  
    // Check uppercase letters
    if (/[A-Z]/.test(password)) {
      score++;
    } else {
      errors.push(`Password should contain at least ${minUpperCase} uppercase letter`);
    }
  
    // Check lowercase letters
    if (/[a-z]/.test(password)) {
      score++;
    } else {
      errors.push(`Password should contain at least ${minLowerCase} lowercase letter.`);
    }
  
    // Check numbers
    if (/[0-9]/.test(password)) {
      score++;
    } else {
      errors.push(`Password should contain at least ${minNumbers} number`);
    }
  
    // Check special characters
    if (/[^A-Za-z0-9]/.test(password)) {
      score++;
    } else {
      errors.push(`Password should contain at least ${minSpecialChars} special character`);
    }
  
    return {
      score: score,
      isValid: score === 5,
      errors: errors
    };
  }