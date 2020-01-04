var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var singles = [
    {
        "name":"Brad",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Jennifer",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Angolina",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Moby",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Tom",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Meg",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Madona",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Britney",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },      {
        "name":"Demi",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Bruce",
        "photo":"",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
]

app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.get("/api/friends", function(req, res){
  return res.json(singles);
});

app.post("/api/friends", function(){

});

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});