var Reader = require("./Reader");
var Writer = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var read = new Reader();
var write = new Writer();

async function main() {
  var data = await read.Read("./users.csv");
  var processData = Processor.Process(data);
  var usuarios = new Table(processData);

  var html = await HtmlParser.Parse(usuarios);
  write.Write(Date.now() + ".html", html);
  PDFWriter.Write(Date.now() + ".pdf", html);
}
main();
