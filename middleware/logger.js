require('dotenv').config()

module.exports = function logger(req, res, next) {

  if (process.env.MODE === 'DEV') {
    console.log(`${new Date().getHours()}:${new Date().getMinutes()} [${req.method}] ${(req.originalUrl.search('/static') !== -1 ? '[STATIC] ' : '') + (req.originalUrl.search('/api') !== -1 ? '[API] ' : '')}` + (req.originalUrl).replace('/api', ''));
    if (req.method === 'POST' || req.method === 'PATCH') console.log(req.body)
  }
  next()
}