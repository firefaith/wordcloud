var express = require('express');
var router = express.Router();
var nodejieba = require("nodejieba");
nodejieba.loadDict("./node_modules/nodejieba/dict/jieba.dict.utf8", "./node_modules/nodejieba/dict/hmm_model.utf8", "./node_modules/nodejieba/dict/user.dict.utf8");
var wc={
  data : {},
  add : function(key){
         this.data[key]=this.data[key]==null?1:this.data[key]+1;
        },
  getData : function(){return this.data}
}
/* POST nlp string. */
router.post('/', function(req, res) {
  console.log("in post nlp");
  console.log(req.body);
  var wordList = nodejieba.cutSync(req.body.content);
  if (wordList.constructor == Array) // just for tutorial, this is always be true 
  {
    wordList.forEach(function(word) {
      wc.add(word);     
    });
  }
  console.log(wc.getData());
  res.send(wc.getData());
  
});

module.exports = router;
