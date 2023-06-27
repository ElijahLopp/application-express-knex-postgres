class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends ApiError {
  constructor(message) {
    super(message, 400);
  }
}

class UnauthorizedError extends ApiError {
  constructor(message) {
    super(message, 401);
  }
}

class ForbiddenError extends ApiError {
  constructor(message) {
    super(message, 403);
  }
}

class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = {
  ApiError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
};
