'use client'
import { CarsComplete } from "@/type";
import CarFilter from "./CarFilter";
import CarCard from "./CarCard";
import {useState} from 'react'
import { carSelect, carType } from "./helper/helper";

interface Props {
    data: CarsComplete[]
}

export default function CarSection({data}: Props) {
  const [filter,setFilter] = useState('todos')
  const [sort, setSort] = useState('default')

  
  let filterData = carType(data, filter)
  filterData = carSelect(filterData,sort)

  return (
    <article>
      <div className="flex justify-between items-center border-b-2 py-4">
        <CarFilter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
      </div>
      <div className="grid grid-cols-4 content-center py-10 gap-4">
        {
            filterData.map(e => {
                return <CarCard key={e.id}  id={e.id} name={e.name} year={e.year} price={e.price} photo={e.thumbnail}/>
            })
        }
      </div>
    </article>
  );
}
