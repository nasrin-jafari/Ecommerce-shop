import React, { useContext } from "react";
// import Product context
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
const Home = () => {
  // import Product from product context
  const { products } = useContext(ProductContext);
  // console.log(products);
  //get only men's & woman's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "women's clothing" || item.category === "men's clothing"
    );
  });
  // console.log(filteredProducts);

  return (
    <div>
      <Hero />
      <section className="py-16" id="products">
        <div className="container mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
