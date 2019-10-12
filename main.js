const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const request = require("request");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

///API call for images from Alphacoders
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const apikey = process.env.API_key
app.get("/images", (req, res) => {
  request(
    {
      url:
        `https://wall.alphacoders.com/api2.0/get.php?auth=${apikey}&method`
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }
      const data = JSON.parse(body).wallpapers;
      res.send(data);
    }
  );
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
