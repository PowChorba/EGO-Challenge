import { Carfeature } from "@/type"
import Image from "next/image"

interface Props {
    data: Carfeature[]
}

export default function CarHighlights({data}: Props){
    return(
        <>
        <Image src={data[0].image} alt={data[0].name} width={550} height={550} className="rounded-lg hidden max-sm:inline"/>
        <div className="w-high">
            <h5 className="text-xl text-whiteGrey font-semibold">{data[0].name}</h5>
            <span className="text-base text-whiteGrey">{data[0].description}</span>
        </div>
        <Image src={data[0].image} alt={data[0].name} width={550} height={550} className="rounded-lg max-sm:hidden"/>
        <Image src={data[1].image} alt={data[1].name} width={550} height={550} className="rounded-lg"/>
        <div className="w-high">
            <h5 className="text-xl text-whiteGrey font-semibold">{data[1].name}</h5>
            <span className="text-base text-whiteGrey">{data[1].description}</span>
        </div>
        </>)
}