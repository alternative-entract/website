const hostValidationMiddleware = (req, res, next) => {
  const allowedHosts = ['your-project-name.netlify.app', 'localhost:8888'];
  const host = req.headers.host;
  console.log(`host: ${host}`)

  if (allowedHosts.includes(host)) {
    next();
  }
  else {
    return res.status(405).send('Host Not Allowed');
  }
}

module.exports = hostValidationMiddleware
