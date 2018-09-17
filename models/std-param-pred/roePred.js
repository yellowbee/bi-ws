/**
 * ROE schema for A share companies starting from 1990.
 * Created by bhuang on 8/1/18.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ROEpredSchema = new Schema(
    {
        code: String,
        date: [String],
        val: [Number]
    },
    { collection: "roe-pred" }
);

const ROEpred = mongoose.model("ROEpred", ROEpredSchema);
module.exports = ROEpred;