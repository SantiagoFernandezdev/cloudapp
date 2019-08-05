const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, 'www')));
app.set('port', process.env.PORT || 3000);

app.all ( '*' , (req, res) => {  
    res.status(200).sendFile (__ dirname +  '/www/index.html' );  
});  

app.listen(app.get('port'), () => {
    console.log(`Corriendo aplicacion en el purto ${app.get('port')}`)
})