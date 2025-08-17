import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">🛒 Product Details</h1>
      <p className="mt-2 text-gray-700">Showing details for product ID: {id}</p>
    </div>
  );
}

export default ProductDetailsPage;
