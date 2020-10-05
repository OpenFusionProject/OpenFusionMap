var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.use("/res", express.static("res"));

http.listen(80, () => {
	console.log("listening on *:80");
});

io.on("connection", (socket) => {
	socket.on("poll", () => {
		console.log("poll requested");
	});
});
