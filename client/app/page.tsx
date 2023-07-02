import CarSection from '@/components/Cars/CarSection'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import { CarsGet } from './service/app.service'
import Footer from '@/components/Footer/Footer'

export default async function Home() {
  const data = await CarsGet()

  return (
    <>
    <main>
      <Navbar/>
      <div className='w-75 text-left m-auto h-200 flex items-center max-sm:w-90'>
        <h1 className='font-bold text-5xl text-whiteGrey max-sm:text-4xl max-sm:text-tituloResponsive'>Descubri todos los modelos</h1>
      </div>
      <section className='w-75 text-left m-auto min-h-sectionCar max-sm:w-90'>
        <CarSection data={data}/>
      </section>
    <Footer/>
    </main>
    </>
  )
}
