import Home0420 from './comp/Home0420';
import Footer from './comp/Footer';
import Write from './comp/Write';
import Post from './comp/Post';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import todo from './data/data'

function App() {  
  return (
    <BrowserRouter>
        <Home0420 todo={todo} />
        {/* <Write /> */}
        {/* <Post /> */}
        <Footer />

      <Routes>
        <Route path="/write/*" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;