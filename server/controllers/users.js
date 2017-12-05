var mongoose = require('mongoose');
var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Score = mongoose.model("Score");

module.exports ={
  register: (req,res)=>{
    console.log("hit register");
    User.find({name: req.body.name}, (err, foundUsers)=>{
      if(foundUsers.length > 0){
        console.log('found an existing user');
        req.session.userId = foundUsers[0]._id;
        res.json(foundUsers[0]);
      }else{
        var newUser = new User(req.body);
        newUser.save((err, savedUser)=>{
          if(err){
            console.log("something went wrong");
            res.json(err);
          }else{
            console.log('registered a new user');
            // req.session.userId = savedUser;
            res.json(savedUser);
          }
        })
      }
    })
  },

  getCurrentUser: (req, res)=>{
    console.log('hit getCurrentUser');
    if(req.session.userId != undefined){
      User.findOne({_id: req.session.userId}, (err, loggedUser)=>{
        console.log('found a user in session');
        res.json(loggedUser);
      })
    }else {
      console.log("nobody logged in");
      res.json(err);
    }
  },


  addQuestion: (req, res)=>{
    console.log('hit addQuestion');

    var newQuestion = new Question(req.body);
    newQuestion.save((err, savedQuestion)=>{
      if(err){
        console.log('you hit an error');
        res.json(err);
      }else{
        console.log('saved a new question');
        res.json(newQuestion);
      }
    })
  },

  getQuestions: (req, res)=>{
    console.log('hit getQuestions');

    Question.aggregate({$sample: {size:3}}).exec((err, foundQuestions)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      }else{
        console.log('found questions');
        res.json(foundQuestions);
      }
    })
  },

  checkAnswers: (req, res)=>{
    console.log('hit checkAnswers');
    var answers = req.body;
    Question.find({$or: [{correct: answers.question0}, {correct: answers.question1}, {correct: answers.question2}]}, (err, correctAnswers)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      }else{
        console.log('These are the correct ones found:', correctAnswers);
        res.json(correctAnswers.length);
      }
    })
  },

  saveScore: (req, res)=>{
    console.log('hit saveScore');
    var newScore = new Score(req.body);
    console.log(newScore);
    newScore.save((err, savedScore)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      }else{
        console.log('found scores');
        req.session.scoreId = savedScore;
        console.log("this is the session", req.session.scoreId)
        res.json(savedScore);
      }
    })
  },

  getScores: (req, res)=>{
    console.log('hit getScores');
    Score.find().sort({score: -1}).exec((err, foundScores)=>{
      if(err){
        console.log('something went wrong');
        res.json(err);
      }else{
        console.log('Found all scores:');
        res.json(foundScores);
      }
    })
  },

  getCurrentScore: (req, res)=>{
    if(req.session.scoreId != undefined){
      Score.findOne({_id: req.session.scoreId}, (err, currentScore)=>{
        console.log('found a score in session');
        res.json(currentScore);
      })
    }else {
      console.log("No current scores");
      res.json({message: "No current scores yet"});
    }
  },

  clearSessions: (req, res)=>{
    console.log('hit clearSessions');
    if(req.session.userId != undefined){
      req.session.userId = undefined;
      req.session.scoreId = undefined;
      console.log("this is the user session state:", req.session.userId);
      res.json({currentUserSession: "this is the user session state: " + req.session.userId});
    }else{
      console.log("No current user");
      res.json({message: "No current user yet"});
    }
  }

}
