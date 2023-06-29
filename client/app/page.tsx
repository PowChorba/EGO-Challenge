import CarSection from '@/components/Cars/CarSection'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import { CarsGet } from './service/app.service'

export default async function Home() {
  const data = await CarsGet()

  return (
    <main>
      <Navbar/>
      <div className='w-75 text-left m-auto h-200 flex items-center'>
        <span className='font-bold text-5xl text-whiteGrey'>Descubri todos los modelos</span>
      </div>
      <section className='w-75 text-left m-auto'>
        <CarSection data={data}/>
      </section>
    </main>
  )
}
