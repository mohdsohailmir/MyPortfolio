
import Toggle from "./components/toggle/Toggle";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import { useContext } from "react";
import { ThemeContext } from "./context";




const App = () => {

 // if we dont want to use context api insted use --> const[dark,setDark] = useState(false)

 const theme = useContext(ThemeContext)
 const darkMode = theme.state.darkMode;

  return(
  <div style={{backgroundColor: darkMode ? "#222" :"white" , color: darkMode && "white"}}>
    <Toggle/>
    <Intro/>
    <About/>
   <ProductList/>
   <Contact/>
  
    </div>);
  
  };
  
  export default App;