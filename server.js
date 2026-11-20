const express = require("express");
const app = express();

app.get("/", (req,res) => res.json({status: "ok", framework: "Express"}));
app.get("/hello/:name", (req,res) => res.json({greeting:`Hello, ${req.params.name}!`}));

app.listen(3000, () => console.log("Express app on http://localhost:3000"));