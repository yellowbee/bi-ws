/**
 * Index for Shenzhen B stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexSzBSchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-sz-b" }
);

const IndexSzB = mongoose.model("IndexSzB", IndexSzBSchema);
module.exports = IndexSzB;
