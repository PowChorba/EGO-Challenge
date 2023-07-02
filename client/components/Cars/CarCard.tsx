'use client'
import Link from "next/link";
import Image from "next/image";
import { CarCardType } from "@/type";
import { money } from "./helper/helper";
import { useState } from "react";

export default function CarCard({ id, name, year, price, photo }: CarCardType) {
  const [title, setTitle] = useState(false)

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      {/* <h4 className="text-carH font-semibold max-2xl:text-xl">{name}</h4> */}
      {
        title 
        ? <h4 className="text-carH font-semibold max-2xl:text-xl color-titleHover">{name}</h4>
        : <h4 className="text-carH font-semibold max-2xl:text-xl">{name}</h4>
      }
      <div className="flex justify-center items-center gap-2">
        <span className="text-sm">{year}</span>
        <span>|</span>
        <span className="text-sm">{money(price)}</span>
      </div>
      <div className="min-h-carImg flex flex-col justify-center">
        <Image src={photo} alt={name} width={300} height={125}/>
      </div>
      <Link href={`/${id}`} className="bg-navText text-white w-[152px] h-8 text-center flex justify-center items-center rounded-full text-sm" onMouseEnter={() => setTitle(true)} onMouseLeave={() => setTitle(false)}>Ver modelo</Link>
    </div>
  );
}
