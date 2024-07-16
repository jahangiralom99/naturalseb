import { FaShoppingCart } from "react-icons/fa";
import banner from "../../assets/mmmmm.jpg";

const Banner = () => {
  return (
      <div className="max-w-screen-xl mx-auto px-4 bg-white">
          {/* nav text */}
      <h1 className="text-6xl font-extrabold bg-[#183a1d] text-white p-4 text-center">
        গ্যাস্ট্রিক থেকে স্থায়ীভাবে মুক্তি নিন
      </h1>
      <p className="mt-6 font-bold text-center">
        আপনি জানেন কি ? বর্তমানে ক্যান্সার এর তালিকায় ১৪ তম স্থানে আছে
        গ্যাস্ট্রিক থেকে হওয়া ক্যান্সার রোগী ।” বঙ্গবন্ধু শেখ মুজিব ” মেডিক্যাল
        বিশ্ববিদ্যালয় এর রিপোর্ট।
          </p>
          {/* banner image */}
      <div className="mt-12">
        <img className="lg:max-w-screen-md mx-auto" src={banner} alt="" />
          </div>
          {/* button */}
      <div className="text-center mt-12 w-72 md:w-96 mx-auto">
        <button className="bg-[#f0a04b] rounded-lg  flex flex-col md:flex-row items-center gap-3 px-10 py-3 text-2xl font-bold text-white">
          <FaShoppingCart />
          অর্ডার করতে চাই
        </button>
      </div>
      <h1 className="text-3xl font-extrabold mt-10 bg-[#183a1d] text-white p-4 text-center">
        কেন আপনি মেথি মিক্স পাউডারটি কিনবেন ?
      </h1>
    </div>
  );
};

export default Banner;
