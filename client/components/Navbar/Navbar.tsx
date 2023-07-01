'use client'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Logo from '../Helpers/Logo'
import {usePathname, useRouter} from 'next/navigation'
import {useState} from 'react'
import Menu from './Menu'

export default function Navbar(){
    const path = usePathname()
    const router = useRouter()
    const [menu, setMenu] = useState(false)

    return(
        <nav className="flex justify-around items-center gap-4 h-[70px] px-6 border-b-2 relative">
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
                {
                    menu 
                    ? <><span>Cerrar</span>
                    <AiOutlineClose className='w-6 h-5 cursor-pointer' onClick={() => setMenu(false)}/> </>
                    : <><span>Menu</span>
                    <AiOutlineMenu className='w-6 h-5 cursor-pointer' onClick={() => setMenu(true)}/> </>
                }
            </div>
                {
                    menu && <div className='absolute top-[70px] right-8 bg-white h-[858px] w-[390px] p-12 flex flex-col gap-6'>
                    <Menu/>
                </div>
                }
        </nav>)
}