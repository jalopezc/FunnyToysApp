import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import StarProduct from './Components/StarProduct/StarProduct';
import Categories from './Components/Categories/Categories';
import MainTitle from './Components/MainTitle/MainTitle';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar ></NavBar>
      <StarProduct/>
      <MainTitle title="CATEGORIES"/>
      <Categories/>
      <MainTitle title="PRODUCTS"/>
      <Products/>
      <Footer/>

    </div>
  );
}

export default App;
