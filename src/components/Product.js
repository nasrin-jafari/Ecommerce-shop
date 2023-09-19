import React, { useContext } from "react";
//import link
import { Link } from "react-router-dom";
//import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
const Product = ({ product }) => {
  // console.log(product)
  //destructure product
  const { title, image, id, category, price } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div className="shadow-md pb-2 px-4">
      <div
        className="
   h-[300px] mb-4 relative overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/* {image} */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300 "
              src={image}
            />
          </div>
        </div>
        {/* {button} */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(id, product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className=" text-3xl " />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl "
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold "> $ {price}</div>
      </div>
    </div>
  );
};

export default Product;