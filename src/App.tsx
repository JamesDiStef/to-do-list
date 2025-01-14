import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-slate-700">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
