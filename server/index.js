const port = 19711;
const express = require("express");
const app = express();
const massive = require("massive");
require("dotenv").config();
const {
  getProds,
  postProd,
  updateProdName,
  updateProdPrice,
  updateProdImage,
  deleteProd
} = require("./Controller");

app.use(express.json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected to db");
});

app.get("/api/products", getProds);
app.post("/api/products", postProd);
app.put("/api/products/name/:prod_id", updateProdName);
app.put("/api/products/price/:prod_id", updateProdPrice);
app.put("/api/products/image/:prod_id", updateProdImage);
app.delete("/api/products/:prod_id", deleteProd);

app.listen(port, () => console.log(`listening on port: ${port}`));
