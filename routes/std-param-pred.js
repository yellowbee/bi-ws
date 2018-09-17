const ROEpred = require("../models/std-param-pred/roePred");
const ROE = require("../models/std-param/roe");
const querystring = require("querystring");

let service = {
  getRoesPredByCompanies: (req, res) => {
    let codes = querystring.parse(req.params.codesstr).codes;
    console.log(codes);
    ROEpred.find(
      {
        code: { $in: codes }
      },
      { _id: 0 },
      (err, roePred) => {
        if (err) {
          res.json({ result: "Company of specified code not found" });
        } else {
          res.json(roePred);
        }
      }
    );
  },

  getRoesHistPredByCompanies: (req, res) => {
    let codes = querystring.parse(req.params.codesstr).codes;
    let promises = [
        ROE.find(
            {
                code: {$in: codes}
            },
            { _id: 0}
        ).exec(),

      ROEpred.find(
        {
          code: { $in: codes }
        },
        { _id: 0 }
      ).exec(),
    ];

    Promise.all(promises).then(function (values) {
        if (values.length < 2) {
            res.json({result: "error when retrieving data"});
        } else {
            res.json({ hist: values[0], pred: values[1] });
        }
    })
  }
};

module.exports = service;
