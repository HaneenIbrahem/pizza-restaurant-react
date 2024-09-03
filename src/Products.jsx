import React, { useState, useEffect } from 'react';
export default function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    console.log(data.recipes);
    setProducts(data.recipes)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3">
            <div className="product">
                <h2>{product.title}</h2>
              <img src={product.image_url} className="card-img-top" alt="..." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
