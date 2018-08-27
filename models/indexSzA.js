/**
 * Index for Shenzhen A stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexSzASchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-sz-a" }
);

const IndexSzA = mongoose.model("IndexSzA", IndexSzASchema);
module.exports = IndexSzA;
