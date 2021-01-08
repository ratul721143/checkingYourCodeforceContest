require('dotenv').config();
var express=require("express"),
    ejs=require("ejs"),
    bodyparser=require("body-parser"),
    request=require("request");




var  app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");




var boolean=0;

app.get("/",function(req,res){
    res.render("Home");
    //console.log(req.body.userid);
});

app.get("/api",function(req,res){
    var user=req.query.userid;
    
    var url="https://codeforces.com/api/user.rating?handle="+user;
    // var url= process.env.CODEFORCEAPI + user;
    request(url,function(error,response,body){
        
        console.log(response.statusCode);
        if(response.statusCode==500){
           //res.redirect("/");
           res.redirect("/");
       }
    if(!error  && response.statusCode==200){
        //var result=result.length;
        var parsedbody=JSON.parse(body);
        console.log(parsedbody);
        var result=parsedbody["result"];
        //console.log(parsedbody["result"].length);
        res.render("details",{username:user,results:result});
    }
});
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);