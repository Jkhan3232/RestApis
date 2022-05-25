const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

require("./database/connection");
const studentrouter = require("./routers/student");

app.use(express.json());
app.use(studentrouter);

app.listen(port, () => {
  console.log(`listin port no.${port}`);
});
