import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const posts = useSelector((state) => state.cart);  // <-- get cart items array

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(posts.reduce((acc, curr) => acc + curr.price, 0));
  }, [posts]);

  return (
    
//    <div className=" flex max-w-5xl justify-between mx-auto p-4  ">
//   {posts.length > 0 ? (
//     <>
//       {/* Cart Items */}
//       <div className="flex flex-col items-center gap-6 min-h-[10vh]">
//         {posts.map((post, index) => (
//           <CartItem key={post.id} post={post} postIndex={index} />
//         ))}
//       </div>

//       {/* Summary Section */}
//       <div className="mt-1 bg-gray-100 p-6 rounded-lg shadow-md flex flex-col gap-6 ">
//         <div>
//           <h2 className="text-lg font-semibold text-green-700 uppercase">Your Cart</h2>
//           <h3 className="text-2xl font-bold text-green-800">Summary</h3>
//           <p className="mt-2 text-gray-600">
//             <span className="font-semibold">Total Items:</span> {posts.length}
//           </p>
//         </div>

//         <div className="text-right">
//           <p className="text-xl font-semibold text-gray-800 mb-3">
//             Total Amount: <span className="text-green-700">${totalAmount.toFixed(2)}</span>
//           </p>
//           <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow">
//             Checkout Now
//           </button>
//         </div>
//       </div>
//     </>
//   ) : (
//     <div className="flex flex-col justify-center items-center min-h-screen text-center w-full">
//   <h1 className="text-3xl font-bold text-gray-700 mb-4 ">Cart Empty</h1>
//   <Link to="/">
//     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
//       Shop Now
//     </button>
//   </Link>
// </div>

//   )}
// </div> 


<div className="flex max-w-5xl justify-between items-start mx-auto p-4">
  {posts.length > 0 ? (
    <>
      {/* Cart Items */}
      <div className="flex flex-col items-center gap-6 min-h-[10vh] w-[65%]">
        {posts.map((post, index) => (
          <CartItem key={post.id} post={post} postIndex={index} />
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-[30%] h-fit sticky top-4 bg-gray-100 p-6 rounded-lg shadow-md flex flex-col justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-green-700 uppercase">Your Cart</h2>
          <h3 className="text-2xl font-bold text-green-800">Summary</h3>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Total Items:</span> {posts.length}
          </p>
        </div>

        <div className="text-right mt-6">
          <p className="text-xl font-semibold text-gray-800 mb-3">
            Total Amount: <span className="text-green-700">${totalAmount.toFixed(2)}</span>
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow">
            Checkout Now
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className="flex flex-col justify-center items-center min-h-screen text-center w-full">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Cart Empty</h1>
      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
          Shop Now
        </button>
      </Link>
    </div>
  )}
</div>

  );
};

export default Cart;
