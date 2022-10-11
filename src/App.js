import Card from './components/Card';
import Header from './components/Header.js';
import CartDrawer from './components/CartDrawer.js';

const arr = [
              {
                title: 'Mens skeakers Nike Blazer Mid Suede', 
                price: 199, 
                imageUrl: './img/sneakers/1.jpg'
              }, 
              {
                title: 'Mens skeakers Nike Air Max 270', 
                price: 199, 
                imageUrl: './img/sneakers/2.jpg'
              }, 
              {
                title: 'Mens skeakers Nike Blazer Mid Suede', 
                price: 199, 
                imageUrl: './img/sneakers/3.jpg'
              }, 
              {
                title: 'Mens skeakers Puma X Aka Boku Future Rider', 
                price: 199, 
                imageUrl: './img/sneakers/4.jpg'
              }
            ]

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
          {
            arr.map((obj) => (
              <Card 
                title={obj.title} 
                price={obj.price} 
                imageUrl={obj.imageUrl}
                onFavorite={() => console.log('Добавлено в избранное')}
                onPlus={() => console.log('Добавлено в корзину')}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
