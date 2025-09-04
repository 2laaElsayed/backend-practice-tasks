export const addCreatedAt = (req, res, next) => {
  if (!req.body) req.body = {}; 
  req.body.createdAt = new Date().toISOString();
  next();
};

export const addUpdatedAt = (req, res, next) => {
  if (!req.body) req.body = {}; 
  req.body.updatedAt = new Date().toISOString();
  next();
};
