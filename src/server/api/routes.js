var router = require('express').Router();
const axios = require('axios');

//var news = require('./news');


//router.post('/news',news.basic);


var trends, trendsTimestamp, trendsC;
router.get('/trends', function (req, res) {
  let url = 'https://trends.google.com/trends/hottrends/visualize/internal/data';
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});


router.get('/test', function (req, res) {

  res.send("test working");
});


module.exports = router;
