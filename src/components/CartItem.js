import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';

const CartItem = ({ post }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(post.id));  // Using post.id directly
        toast.error("Item Removed");
    };

    return (
        
        <div className=" border-b border-gray-200 pb-6 mb-6 ">
  <div className=" flex  gap-3 ">

    {/* Product Image on Top */}
    <div className="w-36 h-36 flex-shrink-0 ">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-contain"
        // w-60 h-48 object-contain
      />
    </div>

    {/* Product Details */}
    <div className="flex flex-col ">
      <div>
         <h1 className="text-md font-semibold text-gray-800">{post.title}</h1>
         <p className="text-sm text-gray-600 line-clamp-2 mt-1">
          {post.description}
         </p>
      </div>

    {/* Price & Remove */}
       <div className="flex  justify-between items-center gap-2 mt-2">
           <p className="text-green-600 font-bold text-md">${post.price}</p>
           <button
            onClick={removeFromCart}
             className="text-red-600 hover:text-red-800 text-xl"
            title="Remove Item"
           >
           <RiDeleteBin6Fill />
           </button>
         </div>
    </div>
    
  </div>
</div>



        
    );
};

export default CartItem;
