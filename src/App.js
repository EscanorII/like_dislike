import Header from "./components/Header/Header";
import './App.css';
import Aside from "./components/Aside/Aside";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";


function App() {
  return (
          <div className="main">
            <Header/>
            <Aside/>
            <Article/>
            <Footer/>
        </div>
  );
}

export default App;
