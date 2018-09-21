/**
 * Index for A stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexASchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-a" }
);

const IndexA = mongoose.model("IndexA", IndexASchema);
module.exports = IndexA;
