//import Product from "../model/product";

export default function sellProduct(product, amount) {
   product.stock -= 1
   return product
}