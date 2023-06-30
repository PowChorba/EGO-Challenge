import Navbar from "@/components/Navbar/Navbar";
import { carDetails } from "./service/car.service";
import CarDetailCard from "@/components/CarIndividual/CarDetail";

export default async function CarDetail({params}: any){
    const {id} = params
    const data = await carDetails(id) 

    return(
        <main>
            <Navbar/>
            <section className="w-full m-auto">
                <CarDetailCard data={data}/>
            </section>
        </main>
    )
}