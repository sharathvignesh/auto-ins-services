const yup = require("yup");

let calculateSchema = yup.object({
  type: yup.mixed().oneOf(['car', 'bike']),
  liscenceType: yup.mixed().oneOf(['green', 'blue', 'gold']),
  age: yup.number().required().positive().integer(),
  estimateDistance: yup.number().required().positive().integer(),
  towingService: yup.boolean().required(),
  lawyerService: yup.boolean().required()
});

module.exports = calculateSchema