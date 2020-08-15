var express = require('express');
var router = express.Router();

router.get('/host/:sessionId/:apiKey/:token/:cName', function (req, res, next) {
    res.render('index', {sessionId: req.params.sessionId, apiKey: req.params.apiKey, token: req.params.token, cName: req.params.cName});
});

router.get('/client/:sessionId/:apiKey/:token/:cName', function (req, res, next) {
    res.render('client', {sessionId: req.params.sessionId, apiKey: req.params.apiKey, token: req.params.token, cName: req.params.cName});
});

module.exports = router;
