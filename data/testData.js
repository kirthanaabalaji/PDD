/**
 * Centralized Test Payloads & Data Supply
 */
module.exports = {
  validUser: {
    name: 'John Doe',
    email: 'john.doe@asthmasense.ai',
    password: 'Password123!',
    phone: '+15550192834',
    dob: '1990-05-15',
    gender: 'Male',
  },

  invalidUser: {
    email: 'nonexistent.user@invalid.com',
    password: 'WrongPassword999',
  },

  boundaryPayloads: {
    emptyEmail: '',
    emptyPassword: '',
    invalidEmailFormat: 'john.doe.invalid-email',
    shortPassword: '123',
    specialCharsName: '<script>alert("xss")</script>',
    longName: 'A'.repeat(256),
    invalidPhone: '12345',
  },

  dynamicFormInputs: [
    { field: 'email', value: 'test@domain.com', isValid: true },
    { field: 'email', value: 'invalid-email', isValid: false, expectedError: 'Please enter a valid email address.' },
    { field: 'password', value: '12345', isValid: false, expectedError: 'Password must be at least 6 characters.' },
    { field: 'password', value: 'Secret123!', isValid: true },
  ],
};
