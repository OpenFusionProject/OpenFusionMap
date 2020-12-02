var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);
var net = require("net");

var options = {
	port: 8002,
	host: "108.82.239.177",
};

var socket = net.connect(options, () => {
	console.log("connected to server");
	var key = "";
});

socket.on("data", function (data) {
	console.log(data.toString());
});

socket.on("end", function () {
	console.log("disconnected from server");
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.use("/res", express.static("res"));

http.listen(80, () => {
	console.log("listening on *:80");
});

io.on("connection", (sock) => {
	sock.on("poll", () => {
		console.log("poll requested");
	});
});
