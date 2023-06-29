import Link from "next/link";
import Image from "next/image";
import { CarCardType } from "@/type";
import { money } from "./helper/helper";

export default function CarCard({ id, name, year, price, photo }: CarCardType) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-carH font-semibold">{name}</h4>
      <div className="flex justify-center items-center gap-2">
        <span className="text-sm">{year}</span>
        <span>|</span>
        <span className="text-sm">{money(price)}</span>
      </div>
      <Image src={photo} alt={name} width={300} height={125}/>
      <Link href={`/${id}`} className="bg-navText text-white w-[152px] h-[34px] text-center flex justify-center items-center rounded-full text-sm">Ver modelo</Link>
    </div>
  );
}
