import Home0420 from './comp/Home0420';
import Footer from './comp/Footer';
import Write from './comp/Write';
import Post from './comp/Post';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {  
  return (
    <BrowserRouter>
        <Home0420 />
        {/* <Write /> */}
        {/* <Post /> */}
        <Footer />

      <Routes>
        <Route index element={<Home0420 />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/write/*" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;