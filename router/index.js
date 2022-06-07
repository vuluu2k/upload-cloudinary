const uploadRouter = require('./upload');

function router(app) {
  app.use('/api/v1/upload', uploadRouter);
}

module.exports = router;
