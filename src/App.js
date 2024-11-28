
import{ BrowserRouter ,Routes ,Route} from "react-router-dom"
import Home from './Pages/Home';
import NavBar from "./components/NavBar";
import Favorites from "./Pages/Favorites";
import ReadLater from "./Pages/ReadLater";
import { Container } from "@mui/material";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <Container>
      <NavBar/>
    </Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/read-later" element={<ReadLater/>} />
      
      </Routes>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
