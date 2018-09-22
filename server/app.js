const Express = require('express')
const app = new Express()
var index = require('../routes/index');
var companyList = require('../routes/companyList');
var search = require('../routes/search');

const port = process.env.PORT || 3000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', index);
app.use('/companyList', companyList);
app.use('/searchCompany', search);

// app.use('/companyBenefits', companyBenefits);
// Log percolated errors to the console
app.on('error', err => {
    console.error('Server Error', err)
})

app
    .listen(port, err => {
        if (err) throw err
        console.log(`App Listening on Port ${port}`)
    })