const yup = require("yup");

let saveUserSchema = yup.object({
  name: yup.string().required(),
  dob: yup.date().required(),
  address: yup.string().required(),
  liscenceNumber: yup.string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(12, "Liscence number must be 12 digits")
    .max(12, "Liscence number must be 12 digits"),
  type: yup.mixed().oneOf(["car", "bike"]),
  liscenceType: yup.mixed().oneOf(["green", "blue", "gold"]),
  age: yup.number().required().positive().integer(),
  estimateDistance: yup.number().required().positive().integer(),
  towingService: yup.boolean().required(),
  lawyerService: yup.boolean().required(),
});

module.exports = saveUserSchema;
