
const mongoose = require('mongoose');
const app = require('./app');
mongoose.connect('mongodb://localhost:27017/tour-management').then(() => {
    console.log('YAY! mongoose connected')
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})