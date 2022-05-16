const mysql = require('mysql')

const mySqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_basico'

})

mySqlConnection.connect(function(err){
    if(err)
    {
        console.log(err)
        return;
    }
    else
    {
        console.log('DB se conecto')
    }
})

module.exports=mySqlConnection