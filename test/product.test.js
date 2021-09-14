import Product from "../src/model/product";
import sellProduct from "../src/service/sellProduct";

test('must validate the sale of a unit in stock', () => {
   let product = new Product('Cellphone', 500.00, 900.00, 10);
   sellProduct(product, 1);
   expect(product.stock).toBe(9);
})

test('must accept the sale of more than one unit', () => {
   let product = new Product('Cellphone', 500.00, 900.00, 10)
   sellProduct(product, 1);
   expect(product.stock).toBe(7);
})