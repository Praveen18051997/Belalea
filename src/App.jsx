import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import ShopSingle from "./pages/ShopSingle/ShopSingle";
import Blog from "./pages/Blog/Blog";
import BlogSingle from "./pages/BlogSingle/BlogSingle";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ShopSingle />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogSingle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;