import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <Link to="/" className="mt-4 text-blue-600 underline">Go Back Home</Link>
    </div>
  );
}

export default NotFoundPage;
