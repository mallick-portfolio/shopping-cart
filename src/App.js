import Cart from "./components/Cart.jsx";
import Products from "./components/Products.jsx";

function App() {
  return (
    <>
      <div className="flex gap-6 container mx-auto">
        <div className="w-4/6">
          <Products />
        </div>
        <div className="w-2/6">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
