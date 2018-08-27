/**
 * Index for Shanghai B stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexShBSchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-sh-b" }
);

const IndexShB = mongoose.model("IndexShB", IndexShBSchema);
module.exports = IndexShB;
