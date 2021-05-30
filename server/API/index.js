const router = require('express').Router();

// Routes go here

// Basically a table of contents for Routes

// Example Route: router.use('/campuses', require('./campuses'));

// API Error Handling
router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
