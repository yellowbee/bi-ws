/**
 * Index for B stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexBSchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-b" }
);

const IndexB = mongoose.model("IndexB", IndexBSchema);
module.exports = IndexB;
