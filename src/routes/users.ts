import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(_req, res, _next) {
  res.json({msg:'respond with a resource'});
});



export default router;
