import { CarDetailsComplete } from "@/type";
import Image from "next/image";
import { deleteTag } from "./helper/helper";
import CarHighlights from "./CarHelpers/CarHighlights";
import CarFeature from "./CarHelpers/CarFeature";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import Footer from "../Footer/Footer";

interface Props {
  data: CarDetailsComplete;
}

export default function CarDetailCard({ data }: Props) {
  return (
    <>
      <article className="grid grid-cols-2 place-items-center gap-4 h-intro mt-8 mb-[100px] w-75 mx-auto">
        <Image src={data.photo} alt={data.name} width={600} height={600} />
        <div>
          {/* <div className="flex justify-center items-center text-left"> */}
          <h4 className="text-xl text-whiteGrey">
            {data.name} {data.segment}
          </h4>
          {/* </div> */}
          <p className="text-[50px] text-whiteGrey">{data.title}</p>
          <p className="text-whiteGrey">{deleteTag(data.description)}</p>
        </div>
      </article>
      <article className="w-full h-[410px] flex justify-center items-center gap-4 bg-personalGrey">
        {/* <div className="w-[45px] h-[150px] bg-arrowDiv flex justify-center items-center"> */}
          {/* <MdKeyboardArrowLeft className="text-4xl text-arrow"/> */}
        {/* </div> */}
        {
          data.model_highlights.map(e => {
            return <CarFeature key={e.title} title={e.title} content={e.content} image={e.image} />
          })
        }
        {/* <div className="w-[45px] h-[150px] bg-arrowDiv flex justify-center items-center"> */}
        {/* <MdKeyboardArrowRight className="text-4xl text-arrow"/> */}
        {/* </div> */}

      </article>
      <article className="w-75 grid grid-cols-2 mx-auto gap-4 place-items-center my-[100px]">
        <CarHighlights data={data.model_features}/>
      </article>
      <Footer/>

    </>
  );
}
