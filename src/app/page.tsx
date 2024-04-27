import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import { PiShoppingCart } from "react-icons/pi";
import { PiStorefrontLight } from "react-icons/pi";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

export default function Home() {
  return (
    <nav className="bg-geen-500 flex h-[100px]">
      {/* flipkart logo */}
      <div className="logo-container">
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          className=" w-[180px] mt-3"
        />
      </div>

      {/* input box */}
      <div className="input-container flex">
        <input
          type="search"
          placeholder="Search for Products, Brands and More"
          className=" w-[680px] rounded-lg pl-[40px] 
                      h-[39px] ml-[30px] mt-[16px] outline-none bg-teal-50"
        />

        <button>
          <CiSearch
            className="w-[30px] h-[25px] ml-[-675px] 
                        mt-[-28px]"
            color="gray"
          />
        </button>
      </div>

      {/* login */}
      <div className="ml-4 flex mb-6 space-x-[58px]">
        <div className="flex items-center">
          <div className="cart-container flex  w-full text-slate-900 hover:bg-blue-700 hover:rounded-lg hover:text-white p-2 ml-5">
            <PiUserCircleLight size={26} />
            <div className="pl-[8px]">Login</div>
          </div>
        </div>

        {/* cart */}
        <div className="flex items-center">
          <div className="cart-container flex  w-full text-slate-900 ">
            <PiShoppingCart size={26} />
            <div className="pl-[8px]">Cart</div>
          </div>
        </div>

        {/* Become a seller */}
        <div className="seller-container flex items-center  text-slate-900">
          <PiStorefrontLight size={26} />
          <div className="pl-[8px]">Become a Seller</div>
        </div>
      </div>
    </nav>
  );
}
