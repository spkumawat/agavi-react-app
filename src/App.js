import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route , Router} from "react-router-dom";
import NavBar from './Components/Navbar'
// import Header from './Components/Header';
import Home from './pages/Home'
import Services from './pages/Services.js';
import Aboutus from './pages/Aboutus.js' ;
import Blog from './pages/Blog.js';
import Contactus from './pages/Contactus.js'
import Gallary from './pages/Gallary.js' 
// import Counts from './pages/Counts';
// import Events from './pages/Events';
// import Team from './pages/Team';
// import Gallary from './pages/Gallary' ;
import Footer from './Components/Footer.js'


function App() {
  return (
     <>
     <BrowserRouter>

        {/* <Header /> */}
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element = {<Aboutus />} /> 
        <Route path ="/blog" element = {<Blog /> }  /> 
        <Route path = "/services" element ={<Services />} /> 
        <Route path='/gallary' element ={<Gallary />  } /> 
        <Route path = "/contact-us" element = { <Contactus /> }  /> 
        </Routes>
        <Footer/> 
     </BrowserRouter>
       
    </>
    
  );
}


// function App() {
//   return (
//      <>
//       <Router>
//         <NavBar />
//         <div className="pages">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </div>
//       </Router>
//     </>
    
//   );
// }

export default App;
