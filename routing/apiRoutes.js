require("routing/apiRoutes")(app);
require("routing/htmlRoutes")(app);

module.exports = function(app) {
    app.get("/api/friends", function(req, res){
        return res.json(singles);
      });
      
      app.post("/api/friends", function(req, res){
        var newSingle = req.body;
        singles.push(newSingle);
        console.log("test2");
        return res.json(singles);
      });
}