let express = require('express');
let router = express.Router();
let { main } = require('../../business/subtractController');
let { subtractRequestValidations, checkValidations } = require('../../business/utils/subtractRequestValidations');

router.post('/subtract', [subtractRequestValidations(), checkValidations],(req, res) =>{
  const response = main(req.body.factors);
  res.status(response.code).json(response.body);
});

module.exports = router;
