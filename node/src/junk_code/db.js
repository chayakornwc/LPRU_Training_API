/*const http = require('http');
const server = http.createServer((req, res)=>{
  const data = {
    data: 'hello-world',
    hostname: require('os').hostname()
  };
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));

});
  server.listen(process.env.PORT, (err)=>{
    if(err) return console.log(err);
    console.log('API is Running @ http: 0 0 0 0 0:${process.env.PORT}');
  });*/
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://ba29d9ff37d5:27017/lpru_mngrDB";
  MongoClient.connect(url, function(err, db){ //if empty database will create database
          var obj  = {usrAccount: "chayakorn", pwd: "792538", name:{Fname:"chayakorn", Lname: "Kaewwong"}, role:'Admin' };
          db.collection("tn_member").insertOne(obj, function(err, res){
          if (err) throw err;
            console.log("Data added");
            db.close();
        });

  })
