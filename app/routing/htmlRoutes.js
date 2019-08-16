app.get("/survey", function(req, res) {
    s.readFile(__dirname + "survey.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data);
      })
  });
  app.get("/", function(req, res) {
    s.readFile(__dirname + "/home.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data);
      })
  });