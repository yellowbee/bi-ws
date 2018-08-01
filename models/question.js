/**
 * Created by bhuang on 4/20/18.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestDesc = new Schema({type: String, imgUrl: String, value: String});

const QuestionSchema = new Schema({
    description: [QuestDesc],
    tags: [String],
    location: String,
    price: String,
    qImage: String,
    title: String,
    profileImg: String,
    userName: String,
    fullName: String
}, { collection: 'questions'});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
