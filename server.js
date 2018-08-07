var contact = {
    "First Name": 2,
    "Last Name": 3,
    "Course Type": 4

}

console.log('server is starting');

var express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening(){

    console.log("listening. . ."); 
}

app.use(express.static('website')); 

app.get('/add/:name/:course', addcontact );

function addcontact(request, response) {
    var data = request.params;
    var name = data.name;
    var course = data.course    ;

    contact[name] = course; 

    var reply ={
        msg : "Thank you for your word."
    }

    response.send(reply);
}   

app.get('/all', sendAll);

function sendAll(request, response){
    response.send(contact);
}