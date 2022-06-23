
import Toggle from "./components/toggle/Toggle";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";



const App = () => {

 // if we dont want to use context api insted use --> const[dark,setDark] = useState(false)

  return(
  <div>
    <Toggle/>
    <Intro/>
    <About/>
   <ProductList/>
   <Contact/>
  
    </div>);
  
  };
  
  export default App;