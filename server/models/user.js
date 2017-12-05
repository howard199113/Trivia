let mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
  name: {type:String, required:true, minlength:4}
},{timestamps: true
})
mongoose.model('User', UserSchema);

let QuestionSchema = mongoose.Schema({
  question: {type:String, required:true, minlength:15},
  correct: {type:String, required:true},
  fake1: {type:String, required:true},
  fake2: {type:String, required:true},
})
mongoose.model('Question', QuestionSchema);


let ScoreSchema = mongoose.Schema({
  name: {type:String, required:true},
  score: {type:Number, required:true}
},{timestamps: true
})
mongoose.model('Score', ScoreSchema);
