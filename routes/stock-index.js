const IndexA = require("../models/share-index/indexA");
const IndexB = require("../models/share-index/indexB");
const IndexMdSm = require("../models/share-index/indexMdSm");
const IndexShA = require("../models/share-index/indexShA");
const IndexShB = require("../models/share-index/indexShB");
const IndexStartup = require("../models/share-index/indexStartup");
const IndexSzA = require("../models/share-index/indexSzA");
const IndexSzB = require("../models/share-index/indexSzB");
const IndexSzMainA = require("../models/share-index/indexSzMainA");

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
    },

    getIdxShA: (req, res) => {
        IndexShA.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of Shanghai A stock"});
            } else {
                res.json(result);
            }
        });
    },

    getIdxShB: (req, res) => {
        IndexShB.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of Shanghai B stock"});
            } else {
                res.json(result);
            }
        });
    },

    getIdxStartup: (req, res) => {
        IndexStartup.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of startup stock"});
            } else {
                res.json(result);
            }
        });
    },

    getIdxSzA: (req, res) => {
        IndexSzA.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of Shenzhen A stock"});
            } else {
                res.json(result);
            }
        });
    },

    getIdxSzB: (req, res) => {
        IndexSzB.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of Shenzhen B stock"});
            } else {
                res.json(result);
            }
        });
    },

    getIdxSzMainA: (req, res) => {
        IndexSzMainA.find({}, { _id: 0 }, function (err, result) {
            if (err) {
                res.json({result: "error when retrieving indexes of Shenzhen main A stock"});
            } else {
                res.json(result);
            }
        });
    }
};

module.exports = service;