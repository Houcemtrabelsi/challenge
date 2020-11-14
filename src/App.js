import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import CocktailsDescription from './pages/cocktailsDescription/CocktailsDescription'
import Error from './pages/Error/Error'
import NavBar from './components/NacBar/NavBar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Cocktail/:id" component={CocktailsDescription} />
          <Route path="/*" component={Error} />
        </Switch>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
