const ROA = require("../models/std-param/roa");
const ROE = require("../models/std-param/roe");
const EPS = require("../models/std-param/eps");
const CFPS = require("../models/std-param/cfps");
const BRGR = require("../models/std-param/brgr");
const NPGR = require("../models/std-param/npgr");
const querystring = require("querystring");

let service = {
    getRoesByCompanies: (req, res) => {
        let codes = querystring.parse(req.params.codesstr).codes;
        console.log(codes);
        ROE.find({
            'code': {$in: codes}
        }, (err, roe) => {
            if (err) {
                res.json({result: "Company of specified code not found"});
            } else {
                res.json(roe);
            }
        });
    },

    getRoasByCompanies: (req, res) => {
        let codes = querystring.parse(req.params.codesstr).codes;

        ROA.find({
            'code': {$in: codes}
        }, (err, roa) => {
            if (err) {
                res.json({result: "Company of specified code not found"});
            } else {
                res.json(roa);
            }
        });
    },

    getEPSsByCompanies: (req, res) => {
        let codes = querystring.parse(req.params.codesstr).codes;

        EPS.find({
            'code': {$in: codes}
        }, (err, eps) => {
            if (err) {
                res.json({result: "Company of specified code not found"});
            } else {
                res.json(eps);
            }
        });
    },

    getCFPSsByCompanies: (req, res) => {
        let codes = querystring.parse(req.params.codesstr).codes;

        CFPS.find({
            'code': {$in: codes}
        }, (err, cfps) => {
            if (err) {
                res.json({result: "Company of specified code not found"});
            } else {
                res.json(cfps);
            }
        });
    },

    getBRGRsByCompanies: (req, res) => {
        let codes = querystring.parse(req.params.codesstr).codes;

        BRGR.find({
            'code': {$in: codes}
        }, (err, brgr) => {
            if (err) {
                res.json({result: "Company of specified code not found"});
            } else {
                res.json(brgr);
            }
        });
    },

    getNPGRsByCompanies: (req, res) => {
        let codes = querystring.parse(req.params.codesstr).codes;

        NPGR.find({
            'code': {$in: codes}
        }, (err, npgr) => {
            if (err) {
                res.json({result: "Company of specified code not found"});
            } else {
                res.json(npgr);
            }
        });
    }
};

module.exports = service;
