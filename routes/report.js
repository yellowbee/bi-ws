const AShare = require("../models/a-share");
const querystring = require("querystring");

let service = {
    getBasicInfoByCompanies: (req, res) => {
        let codes = querystring.parse(req.params.codesstr).codes;
        console.log(codes);
        AShare.find(
            {
                code: { $in: codes }
            },
            { _id: 0 },
            (err, data) => {
                if (err) {
                    res.json({ result: "Companies of specified codes not found" });
                } else {
                    res.json(data);
                }
            }
        );
    },
};

module.exports = service;
