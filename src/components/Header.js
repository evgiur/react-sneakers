function Header() {
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
}

export default Header