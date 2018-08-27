/**
 * Index for Startup stock.
 * {
 *     label: "平安银行",
 *     value: "000001.SZ"
 * }
 * Created by bhuang on 2018/8/26.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const IndexStartupSchema = new Schema(
    {
        label: String,
        value: String
    },
    { collection: "idx-startup" }
);

const IndexStartup = mongoose.model("IndexStartup", IndexStartupSchema);
module.exports = IndexStartup;
