function CartDrawer(){
    <div style = {{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2>Cart 
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </h2>

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

          <button className="byButton">Place order</button>
        </div>
    </div>  
}

export default CartDrawer