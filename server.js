const express = require('express');

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


const PORT = process.env.PORT || 3001;

const app = express();

//parse incoming string ro array data
app.use(express.urlencoded({ extended:true}));
//parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/',htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});