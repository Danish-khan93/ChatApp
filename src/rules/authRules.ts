export const displayNameRules = {
  required: {
    value: true,
    message: "this field is requires",
  },
};
export const profilePicRules = {
  required: {
    value: true,
    message: "this field is requires",
  },
};
export const emailRules = {
  required: {
    value: true,
    message: "this field is requires",
  },
};
export const passwordRules = {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    maxLength: {
      value: 20,
      message: "Password must not exceed 20 characters",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  };