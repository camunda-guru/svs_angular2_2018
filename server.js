/**
 * Created by BALASUBRAMANIAM on 12-03-2017.
 */
var express        =         require("express");
var bodyParser     =         require("body-parser");
var cors=require("cors");
var app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/public', express.static('../public'))
app.get('/',function(req,res)
{

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    res.end("Ready to Rock!....");
})


app.post('/register',function(req,res){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    //var user_name=req.body.User;
   // var password=req.body.Password;
    //console.log("User name = "+user_name+", password is "+password);
    console.log(req.body);
    res.send({"firstName":req.body.firstName});


});

app.post('/login',function(req,res){

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    //var user_name=req.body.User;
    //var password=req.body.Password;
    //console.log("User name = "+user_name+", password is "+password);
    console.log(req.body);
    res.send({"email":req.body.email});


});



app.listen(3000,function(){
    console.log("Started on PORT 3000");
})