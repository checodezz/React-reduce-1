import "./App.css";

const ProductList = ({ products }) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>Total Price of Products</h2>
      <p>{totalPrice}</p>
    </div>
  );
};

const Restaurants = ({ restaurants }) => {
  const totalRatings = restaurants.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRatings = totalRatings / restaurants.length;

  return (
    <div>
      <h2>Total Restaurant Ratings</h2>
      <p>{totalRatings}</p>

      <h2>Average Restaurant Ratings</h2>
      <p>{averageRatings.toFixed(2)}</p>
    </div>
  );
};

const Videos = ({videos}) => {
  const totalViews = videos.reduce((acc, curr) => acc + curr.views, 0);

  return(
    <div>
    <h2>Total Views of Videos</h2>
      <p>{totalViews}</p>
    </div>
  )
}
export default function App() {
  const products = [
    { id: 1, name: "Product A", price: 10.99 },
    { id: 2, name: "Product B", price: 24.99 },
    { id: 3, name: "Product C", price: 7.5 },
  ];

  const restaurants = [
    { id: 1, name: "Restaurant 1", cuisine: "Italian", rating: 4.5 },
    { id: 2, name: "Restaurant 2", cuisine: "Mexican", rating: 3.8 },
    { id: 3, name: "Restaurant 3", cuisine: "Japanese", rating: 4.2 },
  ];

  const videos = [
      { id: 1, title: "Video 1", views: 1000 },
      { id: 2, title: "Video 2", views: 2000 },
      { id: 3, title: "Video 3", views: 3000 }
  ];

  return (
    <main>
      <ProductList products={products} />
      <hr />
      <Restaurants restaurants={restaurants} />
      <Videos videos={videos}/>
    </main>
  );
}
