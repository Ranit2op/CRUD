import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get( `https://dummyjson.com/products/${id}` );
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <table className="table" style={{ border: "1px solid black", width: "100%", textAlign: "left" }}>
        <tbody>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <td style={{ border: "1px solid black", padding: "8px" }}>{product.id}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
            <td style={{ border: "1px solid black", padding: "8px" }}>{product.title}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Description</th>
            <td style={{ border: "1px solid black", padding: "8px" }}>{product.description}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Price</th>
            <td style={{ border: "1px solid black", padding: "8px" }}>${product.price}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Category</th>
            <td style={{ border: "1px solid black", padding: "8px" }}>{product.category}</td>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Images</th>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.title}
                  style={{ height: "100px", marginRight: "10px", border: "1px solid black" }}
                />
              ))}
                      </td>
                     
                  </tr>
                  <tr>
                      <button className="btn btn-primary" >Add To Cart</button>
                  </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;