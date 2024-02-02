exports.allowedHosts = {
  credentials: true,
  origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
};

exports.constants = {
  VALIDATION_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
};
