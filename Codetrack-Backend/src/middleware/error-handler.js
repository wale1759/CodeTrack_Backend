export function notFoundHandler(request, response) {
  response.status(404).json({
    error: {
      message: `Route ${request.method} ${request.originalUrl} was not found`,
    },
  });
}

export function errorHandler(error, request, response, next) {// eslint-disable-line no-unused-vars
  const message =
    process.env.NODE_ENV === "production"
      ? "Something went wrong. Please try again later"
      : error.message;

  return response.status(500).json({ error: { message } });
}
