/**
 * Index for Medium and Small stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexMdSmSchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-md-sm" }
);

const IndexMdSm = mongoose.model("IndexMdSm", IndexMdSmSchema);
module.exports = IndexMdSm;
