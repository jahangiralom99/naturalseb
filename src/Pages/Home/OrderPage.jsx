import { FaLock } from "react-icons/fa";
import img1 from "../../assets/1-300x300.png";
import img2 from "../../assets/2-300x300.png";
import img3 from "../../assets/3-300x300.png";
import { useForm } from "react-hook-form";
import { FiLink } from "react-icons/fi";

const OrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-24">
      <h1 className="font-bold">যেকোনো একটি প্যাকেজ নির্বাচন করুন</h1>
      {/* প্যাকেজ নির্বাচন Pages */}
      <div className="grid relative grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="flex gap-8 items-center p-6 border border-[#30e64c] rounded-lg">
          <input className="accent-red-600" type="radio" name="" id="" />
          <img className="w-16" src={img1} alt="" />
          <div className="space-y-3">
            <h1 className="font-bold">১ মাসের প্যাকেজ</h1>
            <p className="text-sm">
              সারাদেশে ১০০ টাকা ডেলিভারি চার্জ যুক্ত হবে।
            </p>
            <div className="flex gap-6 items-center">
              <div className="border flex items-center gap-3 cursor-pointer">
                {" "}
                <p>-</p> <span className="bg-white px-2">1</span> <p>+</p>
              </div>
              <p className="font-bold">৳ 590.00</p>
            </div>
          </div>
        </div>
        <div className="relative flex gap-8 items-center p-6 border border-[#30e64c] rounded-lg">
          <div className="absolute top-6 -right-5 rotate-45">
            <p className="bg-red-500 px-5 font-semibold text-sm ">
              Best Selling
            </p>
          </div>
          <input className="accent-red-600" type="radio" name="" id="" />
          <img className="w-16" src={img2} alt="" />
          <div className="space-y-3">
            <h1 className="font-bold">২ মাসের প্যাকেজ</h1>
            <p className="text-sm">ফ্রি ডেলিভারি</p>
            <div className="flex gap-6 items-center">
              <div className="border flex items-center gap-3 cursor-pointer">
                {" "}
                <p>-</p> <span className="bg-white px-2">1</span> <p>+</p>
              </div>
              <p className="font-bold">৳ 590.00</p>
            </div>
          </div>
        </div>
        <div className="relative flex gap-8 items-center p-6 border border-[#30e64c] rounded-lg">
          <div className="absolute top-6 -right-5 rotate-45">
            <p className="bg-red-500 px-5 font-semibold text-sm ">
              Best Selling
            </p>
          </div>
          <input className="accent-red-600" type="radio" name="" id="" />
          <img className="w-16" src={img3} alt="" />
          <div className="space-y-3">
            <h1 className="font-bold">3 মাসের প্যাকেজ</h1>
            <p className="text-sm">পুরাতন সমস্যা হলে তিন মাস খেতে হবে</p>
            <div className="flex gap-6 items-center">
              <div className="border flex items-center gap-3 cursor-pointer">
                {" "}
                <p>-</p> <span className="bg-white px-2">1</span> <p>+</p>
              </div>
              <p className="font-bold">৳ 590.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* Main Order Page */}
      <div className="bg-white border rounded mt-12 p-6">
        <div className="flex flex-col gap-8 md:flex-row justify-between mt-10 ">
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Billing details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  আপনার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  id="address"
                  name="address"
                  autoComplete="text"
                />
                {errors.address && (
                  <p className="text-red-600">
                    মোবাইল নাম্বার তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  ফোন <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="ফোন নাম্বার লিখুন"
                  id="phone"
                  name="phone"
                  autoComplete="number"
                />
                {errors.phone && (
                  <p className="text-red-600">আপনার সম্পূর্ণ ফোন নম্বর লিখুন</p>
                )}
              </div>
              <div className="mt-6 ">
                <p className="text-sm">
                  Country / Region <span className="text-red-500">*</span>
                </p>
                <h3 className="font-bold mt-3">Bangladesh</h3>
              </div>
            </form>
          </div>
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Your order</h2>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-12 rounded" src={img2} alt="" />
                <p>২ মাসের প্যাকেজ</p>
              </div>
              <div>
                <p>× 1 390.00৳ </p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <p> ৳ 1,000.00</p>
            </div>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Shopping</p>
              <p>Free Shipping</p>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex  text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>390</p>
            </div>
            <div className="bg-[#f4f8fa] p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <p>Cash on delivery</p>
                <img src="" alt="" />
              </div>
              <p className="p-4 bg-white mt-4 text-sm">
                Pay with cash upon delivery.
              </p>
            </div>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full gap-3 py-3 flex items-center justify-center  font-bold text-white rounded-lg bg-[#FF0000] hover:bg-[#b11111]">
                <FaLock />
                Place Order ৳ 765.00
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-12 text-center text-xl font-bold bg-white p-3">
        @Ionic Corporation
      </p>
      <div className="mt-28  pb-28">
        <p className="text-xl  font-bold text-center flex items-center justify-center gap-4 p-2 bg-white ">
          <FiLink />
          Privacy Policy <FiLink />
          Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default OrderPage;
