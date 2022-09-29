import Card from './components/Card.js';
import Header from './components/Header.js';
import CartDrawer from './components/CartDrawer.js';

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

          <div className="itemCard">
            <img
              width={133}
              height={112}
              src="img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Male sneakers Nike Blazer Mid Suede</h5>
            <div className="cardTop">
              <div className="cardPrice">
                <span>Price: </span>
                <b>200 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="itemCard">
            <img
              width={133}
              height={112}
              src="img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Male sneakers Nike Blazer Mid Suede</h5>
            <div className="cardTop">
              <div className="cardPrice">
                <span>Price: </span>
                <b>200 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="itemCard">
            <img
              width={133}
              height={112}
              src="img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Male sneakers Nike Blazer Mid Suede</h5>
            <div className="cardTop">
              <div className="cardPrice">
                <span>Price: </span>
                <b>200 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
