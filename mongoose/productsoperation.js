const productmodel = require("./models/productsmodel");
//crud operations
//creating new product or adding
const createproduct = async (title, price, tag) => {
  console.log("creating products");
  let product = new productmodel();
  product.title=title;
  product.price=price;
  product.tags=tags;
  await product.save();
  return product;
};

//reading products
const getproduts = async ()=>{
  let readprod = await productmodel.find();
  return readprod;
}

//deleting product 
const delproduct = async()=>{
  let prod = await productmodel.findByIdAndDelete(_id);
}
//updating product
const updateproduct = async (_id,title, price, tag) => {
  let product =await productmodel.fingById(_id);
  product.title=title;
  product.price=price;
  product.tags=tags;
  await product.save();
  return product;
};

module.exports.createproduct = createproduct;
module.exports.getproduts = getproducts;
module.exports.delproduct = delproduct;
module.exports.updateproduct = updateproduct;
