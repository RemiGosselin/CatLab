var express = require('express');
var router = express.Router();
var slackoutput = require('../data/slackoutput');


router.get('/', function(req, res, next) {
  var replies = [];
  for (var i = 0; i < slackoutput.messages.length; i++) {
      console.log(slackoutput.messages[i].user);
      if (slackoutput.messages[i].parent_user_id) {
        console.log("this message has a parent user ID and it is" +
        slackoutput.messages[i].parent_user_id);
        replies.push(slackoutput.messages[i]);
      }
  }
  res.render('tools', { title: "Tool Page", slack: replies });
});

module.exports = router;
