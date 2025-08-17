import React, { useState, useMemo } from "react";

const productsData = [
  { id: 1, name: "iPhone 15", price: 800, rating: 4.8 },
  { id: 2, name: "Samsung Galaxy", price: 600, rating: 4.5 },
  { id: 3, name: "OnePlus 12", price: 700, rating: 4.6 },
  { id: 4, name: "Google Pixel", price: 650, rating: 4.7 },
  // imagine this list has thousands of items...
];

function ProductList() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("price"); // "price" | "rating"

  // 🟢 Heavy calculation wrapped in useMemo
  const filteredProducts = useMemo(() => {
    console.log("Filtering & Sorting products..."); // only runs when deps change
    let result = productsData.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    if (sortBy === "price") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [query, sortBy]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📱 Product Store</h1>

      <input
        className="border p-2 mr-2"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="border p-2"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="price">Sort by Price</option>
        <option value="rating">Sort by Rating</option>
      </select>

      <ul className="mt-4 space-y-2">
        {filteredProducts.map((p) => (
          <li key={p.id} className="p-2 border rounded">
            {p.name} — 💲{p.price} — ⭐ {p.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
