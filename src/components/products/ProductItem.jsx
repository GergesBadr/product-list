import {
  HiOutlineShoppingCart,
  HiOutlinePlusCircle,
  HiOutlineMinusCircle,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/helpers";
import {
  addToCart,
  productInCart,
  incrementQuantity,
  decrementQuantity,
} from "../cart/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const isInCart = productInCart(cart, product);
  const currProductQuantity = cart.find(
    (item) => item.id === product.id,
  )?.quantity;

  return (
    <li className="relative">
      <picture>
        <source
          srcSet={product.image.mobile}
          media="(max-width: 768px)"
          height="424"
        />
        <source
          srcSet={product.image.tablet}
          media="(max-width: 1024px)"
          height="424"
        />
        <source
          srcSet={product.image.desktop}
          media="(min-width: 1025px)"
          height="480"
        />
        <img
          src={product.image.mobile}
          alt={product.name}
          height="424"
          className={`rounded-xl object-cover object-center ${isInCart ? "border-2 border-custom-red" : ""}`}
        />
      </picture>

      {isInCart ? (
        <div className="relative mx-auto -mt-5 flex w-[175px] items-center justify-between rounded-full bg-custom-red px-6 py-2 text-white">
          <button
            onClick={() => dispatch(decrementQuantity(product.id))}
            aria-label={`decrement ${product.name} quantity`}
          >
            <HiOutlineMinusCircle className="size-6 rounded-full duration-200 hover:bg-white hover:text-custom-red" />
          </button>
          <span> {currProductQuantity} </span>
          <button
            onClick={() => dispatch(incrementQuantity(product.id))}
            aria-label={`increment ${product.name} quantity`}
          >
            <HiOutlinePlusCircle className="size-6 rounded-full duration-200 hover:bg-white hover:text-custom-red" />{" "}
          </button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="relative mx-auto -mt-5 flex w-[175px] items-center justify-center gap-3 rounded-full border border-gray-500 bg-white px-6 py-2 duration-200 hover:text-custom-red"
        >
          <HiOutlineShoppingCart className="size-6 text-custom-red" />
          <span className="font-semibold">Add to cart</span>
        </button>
      )}

      <div className="mt-2 space-y-1">
        <p className="text-sm font-semibold text-custom-rose-500">
          {product.category}
        </p>
        <p className="text-xl font-bold"> {product.name} </p>
        <p className="text-3xl font-semibold text-custom-red">
          {formatPrice(product.price)}
        </p>
      </div>

      {isInCart ? (
        <HiOutlineCheckCircle className="absolute -top-3 right-1/2 size-8 translate-x-1/2 rounded-full bg-custom-green text-white" />
      ) : null}
    </li>
  );
}

export default ProductItem;
