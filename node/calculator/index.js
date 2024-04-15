const sum = require("./sum");
//module.exports = sum; //for single exports
const subtract = require("./subtract");
const func={sum,subtract};
module.exports=func; //for multiple exports
