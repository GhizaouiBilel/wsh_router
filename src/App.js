import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import ProductDetail from "./productDetail/ProductDetail";
function App() {
  const product = [
    {
      id:Math.random(),
      imgSrc:
        "https://th.bing.com/th/id/R.b38f3ea1f155faaef14f344bf74b8b15?rik=ctrnYHfKX3k6zw&pid=ImgRaw&r=0",
      name: "AirPods",
      price: "6,99 $",
    },
    {
      id:Math.random(),
      imgSrc:
        "https://th.bing.com/th/id/R.62443f7dda859823cf5b5772396bbf09?rik=HzaWElpDeJ22fg&pid=ImgRaw&r=0",
      name: "Smart watch",
      price: "8,64 $",
    },
    {
      id:Math.random(),
      imgSrc:
        "https://saligon.com/wp-content/uploads/2020/09/Iphone-11-pro-max-grey-2.jpg",
      name: "Iphone 11 ",
      price: "150 $",
    },
  ];
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact render={()=><Products product={product}/>} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/product/:id" exact render={(props => <ProductDetail {...props} product={product} />)}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
