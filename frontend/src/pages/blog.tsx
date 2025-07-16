import Header from "../components/Header";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import React from "react";

export default function BlogPage() {
  return (
      <div>
        <Header />
        <h1>Welcome to my Blog!</h1>
        <Blog />
        <Footer />
      </div>
  );
}
