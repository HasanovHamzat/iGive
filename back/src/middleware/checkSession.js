function checkingUserSession(req, res, next) {
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  return next();
}

function checkingHospitalSession(req, res, next) {
  if (!req.session.hospital) {
    return res.sendStatus(401);
  }
  return next();
}

module.exports = {
  checkingUserSession,
  checkingHospitalSession,
};
