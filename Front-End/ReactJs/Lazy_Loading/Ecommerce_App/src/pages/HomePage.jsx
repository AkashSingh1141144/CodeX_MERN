import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">🏠 Home Page</h1>
      <p className="mt-2">Welcome to our E-Commerce app.</p>

      <div className="mt-4 flex gap-4">
        <Link to="/product/1" className="text-blue-600 underline">Go to Product</Link>
        <Link to="/cart" className="text-blue-600 underline">Go to Cart</Link>
      </div>
    </div>
  );
}

export default HomePage;
