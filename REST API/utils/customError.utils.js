export default class CustomError extends Error {
  constructor(statusCode = 500, message = 'Internal Server Error', details = null) {
    super(message);
    this.name = 'Error';
    this.statusCode = statusCode;
    if (details) this.details = details;
    Error.captureStackTrace?.(this, this.constructor);
  }
}
