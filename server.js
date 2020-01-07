var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));


var singles = [
    {
        "name":"Brad",
        "photo":"http://www.etonline.com/sites/default/files/styles/dist_rss/public/images/2018-01/brad_pitt_gettyimages_902019514.jpg",
        "scores":[
            1,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Jennifer",
        "photo":"https://celebrityinsider.org/wp-content/uploads/2018/08/Jennifer-Aniston-Snopes.com_-e1533233809797.jpeg",
        "scores":[
            2,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Angolina",
        "photo":"https://media.vanityfair.com/photos/5613dd62dd0e7ddf17bcfbd6/master/w_768,c_limit/angelina-jolie-palisades-rockland-county-new-york-childhood-home.jpg",
        "scores":[
            3,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Moby",
        "photo":"https://www.bing.com/th?id=OIP.Pr4ALyvp07zJa07KF5ij_wHaI4&pid=Api&rs=1",
        "scores":[
            4,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Tom",
        "photo":"https://www.bing.com/th?id=OIP.KY0-iVR64pCc9m8lADWYqgHaJ4&pid=Api&rs=1",
        "scores":[
            5,1,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Meg",
        "photo":"",
        "scores":[
            5,2,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Madona",
        "photo":"https://www.bing.com/th/id/OIP.A5HQL6uO6P3jdk46aPvZqgHaKV?w=163&h=210&c=7&o=5&dpr=1.25&pid=1.7",
        "scores":[
            5,3,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Britney",
        "photo":"http://assets.nydailynews.com/polopoly_fs/1.343772.1314438459!/img/httpImage/image.jpg_gen/derivatives/article_750/amd-britney-spears-jpg.jpg",
        "scores":[
            5,4,4,4,5,1,2,5,4,1
          ]
      },      {
        "name":"Demi",
        "photo":"https://pmcdeadline2.files.wordpress.com/2016/08/demi-moore.jpg?w=605",
        "scores":[
            5,5,4,4,5,1,2,5,4,1
          ]
      },
      {
        "name":"Bruce",
        "photo":"https://www.bing.com/th?id=OIP.WX6MtwUJVRxdRc6RjvhvbAHaLA&pid=Api&rs=1",
        "scores":[
            5,1,3,4,5,1,2,5,4,1
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

app.post("/api/friends", function(req, res){
  var newSingle = req.body;
  singles.push(newSingle);
  console.log("test2");
  return res.json(singles);
});

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
    
});