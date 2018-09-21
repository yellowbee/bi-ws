/**
 * Index for Shanghai A stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexShASchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-sh-a" }
);

const IndexShA = mongoose.model("IndexShA", IndexShASchema);
module.exports = IndexShA;
