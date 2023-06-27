class ErrorMiddleware {
  handle(error, request, response, next) {
    const statusCode = error.statusCode ?? 500;

    const message = error.statusCode ? error.message : 'Internal Server Error';

    return response.status(statusCode).json({ message });
  }
}

module.exports = { ErrorMiddleware };
