import image1 from "../../assets/beauty.png";
import image2 from "../../assets/mixing.png";
import image3 from "../../assets/beauty.png";
import image4 from "../../assets/man.png";
import image5 from "../../assets/sleeping.png";
import image6 from "../../assets/eating.png";
import { FaRegPlayCircle, FaShoppingCart } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import img1 from "../../assets/4-1-1.png";
import img2 from "../../assets/5-1-1.png";
import img3 from "../../assets/6-1-1 (1).png";
import img4 from "../../assets/6-1-1.png";
import { useState } from "react";

const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const card = [
    {
      id: 1,
      image: `${image1}`,
      title: "এটি সেবনের ৫মিনিটের মধ্যে আপনার পেটের সমস্ত গ্যাস বের হয়ে যাবে।",
    },
    {
      id: 2,
      image: `${image2}`,
      title:
        "মেথি মিক্স পাওডার নিয়ম তান্ত্রিক সেবন করার ফলে গ্যাস্ট্রিকের দীর্ঘস্থায়ী সমাধান পাবেন ইনশাআল্লাহ।",
    },
    {
      id: 3,
      image: `${image3}`,
      title:
        "এটি ২ থেকে ৩মাস সেবন করলে আপনাকে গ্যাস্ট্রিকের সমস্যার জন্য আর অন্য কোন ঔষধ ব্যবহার করতে হবে না।",
    },
    {
      id: 4,
      image: `${image4}`,
      title:
        "মেথি মিক্স সেবনে পেটের গ্যাস,পেটে বুকে পিঠে ব্যথা, টক ঢেকুর, বমি ভাব, ক্ষুধামন্দা, বদহজম,,দুর্বলতা দূর হবে।",
    },
    {
      id: 5,
      image: `${image5}`,
      title:
        "এটি সেবনে কোন রকম পার্শ্বপ্রতিক্রিয়া নেই,ল্যাবটেষ্ট এবং বিএসটিআই অনুমোদিত।",
    },
    {
      id: 6,
      image: `${image6}`,
      title:
        "হাজার হাজার মানুষ উপকার পেয়েছে তাদের রিভিউ আমাদের পেইজে দেখতে পারবেন।",
    },
  ];

  return (
    <div className="max-w-screen-xl mt-16 mx-auto px-4 bg-white pt-12">
      <div>
        {/* card */}
        <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6 ">
          {/* card start  */}
          {card.map((item) => (
            <div
              className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]"
              key={item.id}
            >
              <img className="w-12 inline" src={item.image} alt="" />
              <p className="text-xl font-bold">{item.title}</p>
            </div>
          ))}
        </div>
        {/* button */}
        <div className="text-center mt-12 w-72 md:w-96 mx-auto">
          <button className="bg-[#f0a04b] rounded-lg  flex flex-col md:flex-row items-center gap-3 px-10 py-3 text-2xl font-bold text-white">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div>
        {/* Swiper Carosal */}
        <div className="mt-24 border-2 border-black">
          <h1 className="px-4 bg-[#b6f7c0] mt-6 text-center font-bold">
            হাজার হাজার মানুষ উপকার পেয়েছে তাদের ভিডিও রিভিউ আমাদের পেজে দেখতে
            পারবেন।
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={3}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper mt-12"
          >
            <SwiperSlide>
              <div className="relative">
                <img src={img1} alt="" />
                <div
                  onClick={() => setShowModal(!false)}
                  className="absolute top-16 left-36 z-[9]"
                >
                  <FaRegPlayCircle className="text-6xl" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={img2} alt="" />
                <div
                  onClick={() => setShowModal(!false)}
                  className="absolute top-16 left-36 z-[9]"
                >
                  <FaRegPlayCircle className="text-6xl" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img src={img3} alt="" />
                <div
                  onClick={() => setShowModal(!false)}
                  className="absolute top-16 left-36 z-[9]"
                >
                  <FaRegPlayCircle className="text-6xl" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={() => setShowModal(!false)} className="relative">
                <img src={img4} alt="" />
                <div className="absolute top-16 left-36 z-[9]">
                  <FaRegPlayCircle className="text-6xl" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {showModal ? (
          <>
            <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none ">
              <div className="relative w-full my-6 mx-auto ">
                {/*content*/}
                <div
                  className={`border-0 rounded-lg shadow-lg relative flex flex-col max-w-screen-xl mx-auto bg-white outline-none focus:outline-none`}
                >
                  {/*body*/}
                  <iframe
                    className="lg:w-[1200px] md:w-[600px] mx-auto p-2"
                    height="360"
                    src="https://www.youtube.com/embed/bvDNjD7-mc0"
                    title="My Video7"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="[#3761bf] hover:bg-[#15306b] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border rounded-lg hover:text-white"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
