var Users = require('./../controllers/users.js');
var path = require('path');

// var auth = function(req,res,next){
//   if (req.session.userId == undefined){
//     res.sendStatus(401);
//   }else{
//     next();
//   }
// }

module.exports = function(app){
  // public routes
  app.post('/users', Users.register);

// Authentication middleware
  // app.use(auth);


// protected routes
  app.get('/users/current', Users.getCurrentUser);
  app.post('/users/add', Users.addQuestion);
  app.get('/users/get', Users.getQuestions);
  app.post('/users/checkAns', Users.checkAnswers);
  app.post('/users/saveScore', Users.saveScore);
  app.get('/users/getScores', Users.getScores);
  app.get('/users/currentScore', Users.getCurrentScore);
  app.get('/users/clearSessions', Users.clearSessions);
  app.all("*", (req, res) => { res.sendFile(path.resolve("./public/dist/index.html")) });
}
