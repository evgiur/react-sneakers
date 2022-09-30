import Card from './components/Card.js';
import Header from './components/Header.js';
import CartDrawer from './components/CartDrawer.js';

const arr = []

function App() {
  return (
    <div className="wrapper clear">
      <CartDrawer />
      <Header />

      {/*CONTENT*/}
      <div className="content">
        <div className="search-box">
          <h1 className="h1">All sneakers</h1>
          <div className="search-line">
            <img src="img/search.svg" alt="Search?"></img>
            <input placeholder="Search"></input>
          </div>
        </div>

        <div className="sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
