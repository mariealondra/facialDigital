const{createPool } = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MarieK04*",
    port: "3606",
    database: "fadiapp",
    connectTimeout: 10
  });
   
  Pool.query('select * from usuario', (err, result, fields)=>{
      if (err){
         return  console.log(err);
      }
      return console.log(result);
     
  });
  