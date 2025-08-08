var express = require("Express");

var app = express();


app.get("/", function(request, response){
    response.send('Hot Maria Clara');
});


app.listen(3000, function(){
    console.log("Server running at http:localhost:3000");
});