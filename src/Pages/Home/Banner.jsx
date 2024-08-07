import { FaShoppingCart } from "react-icons/fa";
// import banner from "../../assets/mmmmm.jpg";
import { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../Root";
import { base_url } from "../../utilities/dataPanel";
import image1 from "../../assets/beauty.png";
import image2 from "../../assets/mixing.png";
import image3 from "../../assets/beauty.png";
import image4 from "../../assets/man.png";
import image5 from "../../assets/sleeping.png";
import image6 from "../../assets/eating.png";

const Banner = () => {
  // const {name} = useParams();
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    let itmFind = itemData.find((item) => item.name === "4567");
    console.log(itmFind);
    setLanding([itmFind]);
    setLoader(false);
  }, [itemData]);

  const formatStyle = (params) => {
    if (landing[0] && landing[0][params]) {
      return landing[0][params].split("<br>").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ));
    }
  };


  return (
    <div className="max-w-screen-xl mx-auto px-4 bg-white">
      {/* nav text */}
      <h1 className="text-6xl font-extrabold bg-[#183a1d] text-white p-4 text-center">
        {formatStyle("custom_h_1")}
      </h1>
      <p className="mt-6 font-bold text-center">
        {formatStyle("custom__text_2")}
      </p>
      {/* banner image */}
      <div className="mt-12">
        <img
          className="lg:max-w-screen-md mx-auto"
          src={`${base_url + landing[0]?.custom_upload_}`}
          alt=""
        />
      </div>
      {/* button */}
      <div className="text-center mt-12 w-72 md:w-96 mx-auto">
        <button className="bg-[#f0a04b] rounded-lg  flex flex-col md:flex-row items-center gap-3 px-10 py-3 text-2xl font-bold text-white">
          <FaShoppingCart />
          অর্ডার করতে চাই
        </button>
      </div>
      <h1 className="text-3xl font-extrabold mt-10 bg-[#183a1d] text-white p-4 text-center">
        {formatStyle("custom_home1_text_3")}
      </h1>
      {/* card section */}
      {/* card */}
      <div className="grid md:grid-cols-2 mt-12 lg:grid-cols-3 gap-6 p-8">
        {/* card 1  */}
        <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
          <img className="w-12 inline" src={image1} alt="" />
          <p className="text-xl font-bold">
            {formatStyle("custom_home_text_4")}
          </p>
        </div>
        {/* card 2  */}
        <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
          <img className="w-12 inline" src={image2} alt="" />
          <p className="text-xl font-bold">
            {formatStyle("custom_home_text_5")}
          </p>
        </div>
        {/* card 3 */}
        <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
          <img className="w-12 inline" src={image3} alt="" />
          <p className="text-xl font-bold">
            {formatStyle("custom_home_text_6")}
          </p>
        </div>
        {/* card 4  */}
        <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
          <img className="w-12 inline" src={image4} alt="" />
          <p className="text-xl font-bold">
            {formatStyle("custom_home_text_7")}
          </p>
        </div>
        {/* card 5  */}
        <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
          <img className="w-12 inline" src={image5} alt="" />
          <p className="text-xl font-bold">
            {formatStyle("custom_home_text_8")}
          </p>
        </div>
        {/* card 6  */}
        <div className="lg:w-96 hover:shadow-xl text-center rounded-lg mx-auto space-y-5 p-8 bg-[#c7e8ca]">
          <img className="w-12 inline" src={image6} alt="" />
          <p className="text-xl font-bold">
            {formatStyle("custom_home_text_9")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
