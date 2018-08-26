const IndexA = require("../models/indexA");
const IndexB = require("../models/indexB");
const IndexMdSm = require("../models/indexMdSm");

let service = {
    getIdxA: (req, res) => {
        IndexA.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of A stock"});
            } else {
                res.json(result);
            }
        });
    },

    getIdxB: (req, res) => {
        IndexB.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of B stock"});
            } else {
                res.json(result);
            }
        });
    },

    getIdxMdSm: (req, res) => {
        IndexMdSm.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of Medium and Small stock"});
            } else {
                res.json(result);
            }
        });
    }
};

module.exports = service;