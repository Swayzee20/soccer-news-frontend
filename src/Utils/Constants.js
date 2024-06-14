const registerInputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    minlength: "2",
    maxlength: "30",
    required: true,
    errorMessage: "Username is required and must be 2-30 characters",
    label: "Username",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    errorMessage: "Must enter a valid email",
    label: "Email",
  },
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password",
    minlength: "2",
    maxlength: "30",
    required: true,
    errorMessage: "Password must be between 2 and 30 characters",
    label: "Password",
  },
];

const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
    errorMessage: "Must enter a valid email",
    label: "Email",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    minlength: "2",
    maxlength: "30",
    required: true,
    errorMessage: "Password must be between 2 and 30 characters",
    label: "Password",
  },
];

export { registerInputs, loginInputs };