const express = require("express");
const body_parser=require("body-parser");
const https=require("https");
const app=express();
app.use(express.static("public"));
app.use(body_parser.urlencoded({extended:true}))
app.get('/', function(req, res) {
    res.sendFile(__dirname+"/signup.html");
});
app.post('/', function(req, res) {
    const fname=req.body.First_Name;
    const lname=req.body.Last_Name;
    const email=req.body.email_address;
    const password=req.body.Password;
    const confirm_pass=req.body.confirm_password;
    const data = {
        members: [
          {
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: fname,
              LNAME: lname
            }
          }
        ],
      };
    const Json_data=JSON.stringify(data);
    const url="URL";
    const options={
        method:"POST",
        auth:"API_KEY"
    }
    const request=https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
        if(response.statusCode===200){
            if(password!==confirm_pass){
                res.sendFile(__dirname+"/failure_pass.html");
            }
            else res.sendFile(__dirname+"/success.html");
        }
        else {
            res.sendFile(__dirname+"/failure.html");
        }
    })
    request.write(Json_data);
    request.end();
    console.log(fname,lname, email, password, confirm_pass);
});
app.post('/failure',function(req,res){
    res.redirect("/");
})  
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is being hosted on 3000");
});
