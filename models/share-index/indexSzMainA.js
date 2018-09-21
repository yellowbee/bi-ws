/**
 * Index for Shenzhen Main A stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexSzMainASchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-sz-main-a" }
);

const IndexSzMainA = mongoose.model("IndexSzMainA", IndexSzMainASchema);
module.exports = IndexSzMainA;
