'use client'
import { CarDetailsComplete } from "@/type";
import Image from "next/image";
import { deleteTag } from "./helper/helper";
import CarHighlights from "./CarHelpers/CarHighlights";
import CarFeature from "./CarHelpers/CarFeature";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import Footer from "../Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface Props {
  data: CarDetailsComplete;
}



export default function CarDetailCard({ data }: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  return (
    <>
      <article className="grid grid-cols-2 place-items-center gap-4 h-intro mt-8 mb-carHigh w-75 mx-auto max-sm:grid-cols-1 max-sm:w-90">
        <Image src={data.photo} alt={data.name} width={600} height={600} />
        <div className="max-sm:flex max-sm:flex-col max-sm:gap-2">
          <h4 className="text-xl text-whiteGrey font-semibold max-sm:text-base">
            {data.name} {data.segment}
          </h4>
          <p className="text-5xl font-semibold text-whiteGrey max-sm:text-4xl max-sm:">{data.title}</p>
          <p className="text-whiteGrey">{deleteTag(data.description)}</p>
        </div>
      </article>
      <article className="w-full h-featureDiv flex justify-center items-center gap-4 bg-personalGrey max-sm:hidden">
      {
          data.model_highlights.map(e => {
            return <CarFeature key={e.title} title={e.title} content={e.content} image={e.image} />
          })
        }
        </article>
        <div className="hidden max-sm:flex">
      <Slider {...settings} className="px-[55px] py-4 hidden w-full max-sm:flex justify-center items-center bg-personalGrey">
        {
          data.model_highlights.map(e => {
            return <CarFeature key={e.title} title={e.title} content={e.content} image={e.image} />
          })
        }
      </Slider>  
      </div>
      <article className="w-75 grid grid-cols-2 mx-auto gap-4 place-items-center my-carHigh max-sm:w-90 max-sm:grid-cols-1 max-sm:my-[30px]">
        <CarHighlights data={data.model_features}/>
      </article>
      <Footer/>

    </>
  );
}

{/* <div className="w-[45px] h-[150px] bg-arrowDiv flex justify-center items-center"> */}
  {/* <MdKeyboardArrowLeft className="text-4xl text-arrow"/> */}
{/* </div> */}
{/* <div className="w-[45px] h-[150px] bg-arrowDiv flex justify-center items-center"> */}
{/* <MdKeyboardArrowRight className="text-4xl text-arrow"/> */}
{/* </div> */}