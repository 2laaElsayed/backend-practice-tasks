import { validationResult } from "express-validator";

const expressValidatorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map(err => ({
        field: err.param,
        msg: err.msg,
      })),
    });
  }
  next();
};

export default expressValidatorMiddleware;
