const express = require('express')
const router = express.Router()
const generateBuffer = require('../utils/xlsx-gen');
const data = require('../utils/data');


// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
});

// define the home page route
router.get('/', (req, res) => {
    console.log('Request URL:', req.originalUrl)
    res.send('Whales home page')
});

router.get('/export', (req, res) => {
    const buffer = generateBuffer('Whales', data.whale_labels, data.whale_data)
    console.log(buffer);
    res.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-disposition': 'attachment; filename=Whale-Data.xlsx'
    })
    res.end(buffer)

});


module.exports = router