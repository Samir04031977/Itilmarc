var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db",
  port : "3306",
  user: "root",
  password: "password",
  database: "sakila"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

for (var data=[],i=0;i<161;++i) data[i]=i;
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
data = shuffle(data);
