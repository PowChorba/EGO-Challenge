'use client'
import {AiOutlineMenu} from 'react-icons/ai'
import Logo from '../Helpers/Logo'
import {usePathname, useRouter} from 'next/navigation'
import Footer from '../Footer/Footer'

export default function Navbar(){
    const path = usePathname()
    const router = useRouter()

    return(
        <nav className="flex justify-around items-center gap-4 h-[70px] px-6 border-b-2">
            <Logo/>
            <div className='text-left w-75'>
                {
                    path === '/'
                    ? <span className='text-sm font-bold py-4 px-8 border-b-2 border-[#EB0A1E] text-[#EB0A1E] cursor-pointer'>Modelos</span>
                    : <span className='text-sm font-bold text-navText p-4 cursor-pointer' onClick={() => router.push('/')}>Modelos</span>
                }
                {
                    path !== '/'
                    ? <span className='text-sm font-bold p-4 border-b-2 border-[#EB0A1E] text-[#EB0A1E] cursor-pointer'>Ficha de modelo</span>
                    : <span className='text-sm font-bold p-4 text-navText cursor-pointer'>Ficha de modelo</span>
                }
            </div>
            <div className='flex items-center justify-center gap-2'>
                <span>Menu</span>
                <AiOutlineMenu className='w-6 h-5'/>
            </div>
        </nav>)
}