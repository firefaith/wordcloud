var express = require('express');
var router = express.Router();
var nodejieba = require("nodejieba");
nodejieba.loadDict("./node_modules/nodejieba/dict/jieba.dict.utf8", "./node_modules/nodejieba/dict/hmm_model.utf8", "./node_modules/nodejieba/dict/user.dict.utf8");

/* POST nlp string. */
router.post('/', function(req, res) {
  console.log("in post nlp");
  console.log(req.body);
  var wordList = nodejieba.cutSync(req.body.content);
  line='';
  if (wordList.constructor == Array) // just for tutorial, this is always be true 
  {
    wordList.forEach(function(word) {
      line = line+','+word     
    });
  }
  console.log(line);
  res.send(line);
  
});

module.exports = router;
