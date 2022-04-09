
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("we are connected ");
})

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    var greeting =  "My name is " + this.name   
    console.log(greeting);
};
var Kitten = mongoose.model('Kitten', kittySchema);

var Amitkitty = new Kitten({ name: 'Amitkitty ' });
// console.log(Amitkitty.name);
// Amitkitty.speak();

Amitkitty.save(function (err, Amitkitty) {
    if (err) return console.error(err);
    Amitkitty.speak();
  });