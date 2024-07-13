import { useSelector } from "react-redux";
import Cart from "./components/cart/Cart";
import ProductsList from "./components/products/ProductsList";
import ConfirmOrder from "./components/order/ConfirmOrder";

function App() {
  const orderIsConfirmed = useSelector((state) => state.cart.orderConfirmation);

  return (
    <main className="mx-4 my-14 grid grid-cols-1 items-start gap-8 md:mx-16 md:mt-24 xl:mx-32 2xl:max-w-[1636px] 2xl:grid-cols-[1fr,425px]">
      <ProductsList />
      <Cart />

      {orderIsConfirmed === true ? <ConfirmOrder /> : null}
    </main>
  );
}

export default App;
