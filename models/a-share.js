/**
 * Schema for A-share company document.
 * Created by bhuang on 7/31/18.
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AShareSchema = new Schema(
    {
        code: String,
        abb_name: String,
        co_name: String,
        ceo: String,
        prov: String,
        city: String,
        chairman: String,
        reg_addr: String,
        tel: String,
        website: String,
        list_date: Number,
        list_addr: String,
        plate: String,
        co_en_name: String,
        attr: String,
        reg_cap: Number,
        legal_rep: String,
        bus_scope: String,
        ind: String,
        ind_code: String

    },
    { collection: "a_share" }
);

const AShare = mongoose.model("AShare", AShareSchema);
module.exports = AShare;
