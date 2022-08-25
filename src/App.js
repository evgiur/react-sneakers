function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2>Cart</h2>

          <div className="items">
            <div className="cartItem">
              <div
                className="cartItemImg"
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              ></div>
              <div>
                <p>Male sneakers Nike Air Max 270</p>
                <b>200 $</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem">
              <div
                className="cartItemImg"
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              ></div>
              <div>
                <p>Male sneakers Nike Air Max 270</p>
                <b>200 $</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>

          <ul className="totalBlock">
            <li className="total">
              <span>Amount: </span>
              <div></div>
              <b>400$</b>
            </li>

            <li>
              <span>tax 5%: </span>
              <div></div>
              <b>20$</b>
            </li>
          </ul>
        </div>
      </div>

      <header className="header">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />

          <div>
            <h3>React Sneakers</h3>
            <p className="description">Best sneakers shop</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="shoppingCart">
            <img
              width={18}
              height={18}
              src="/img/card.svg"
              alt="shoppingCart"
            />
            <span> 1205 usd</span>
          </li>

          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
            <span> User Name</span>
          </li>
        </ul>
      </header>

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
          <div className="itemCard">
            <div className="favorite">
              <img src="img/unliked.svg" alt="Unliked" />
            </div>

            <img
              width={133}
              height={112}
              src="img/sneakers/1.jpg"
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
