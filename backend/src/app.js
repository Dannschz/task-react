const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
require('./database');

//Midlewares
app.use(express.json());

//Rutas
app.use('/', require('./routes/index'));

// Connection
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('App listening on port ' + app.get('port'));
});