import { Carhighlight } from "@/type";
import Image from "next/image";
import { deleteTag } from "../helper/helper";


export default function CarFeature({title, content, image}: Carhighlight) {
  return(<div className="max-w-[268px] h-[292px] overflow-hidden">
      <Image src={image} alt={title} width={300} height={150} className="rounded-lg"/>
      <h5 className="text-xl text-whiteGrey font-semibold py-2">{title}</h5>  
      <span className="text-left text-sm text-whiteGrey">{deleteTag(content)}</span>
  </div>);
}
