function checksessionAuth(req, res, next) {
  //this sets variable for eveey pug file
  //takes value of user from session and adjusts it to locals user
  if (req.session.user) next();
  else return res.redirect("/login");
}
module.exports = checksessionAuth;
