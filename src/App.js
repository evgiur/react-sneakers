

function App() {
  return (
    <div className="wrapper clear">
      {/* HEADER */}
      <header className="header">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo"/>
          
          <div>
            <h3>React Sneakers</h3>
            <p>Best sneakers shop</p>
          </div>

        </div>
        <ul className="headerRight">
          <li className="card">
            <img width={18} height={18} src="/img/card.svg" alt="card"/>
            <span> 1205 usd</span>
          </li>

          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>
      
      {/*CONTENT*/}
      <div className="content">
        <h1> All sneakers</h1>
        
        <div className="card">
          <img src="" alt="" ></img>
          <p></p>
          <div>
            <div>
              <span>Price</span>
              <b>200 $</b>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
