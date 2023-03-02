var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");

var read = new Reader();

async function main() {
  var data = await read.Read("./users.csv");
  var processData = Processor.Process(data);
  var usuarios = new Table(processData);
  console.log(usuarios.ColumnCount);
}
main();
