const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createproducts,getproduts,delproduct,updateproduct} = require("./productsoperation");
app.use(express.json());

mongoose
  .connect("mongodb://localhost/dbname")
  .then( async () => {
    console.log("connection successfull");
    //for adding a product
    let product = await createproducts("foundation",2500,["silky","waterproof"]);
    console.log(product);
    //for getting all products 
    let allproducts = await getproduts();
    console.log(allproducts);
    //for deleting product
    console.log(await delproduct(yourid));
    //for updating product
    let updated = updateproduct("yourid","mascara updated",1000,["long lasting"])
  })
  .catch((err) => {
    console.log("connection failed");
  });

app.listen(3000);
