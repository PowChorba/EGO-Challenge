import Link from 'next/link'

export default function Menu(){
    return (
        <>
        <div className="h-32 flex flex-col justify-center text-right gap-4">
            <span><Link href='/'>Modelos</Link></span>
            <span>Servicios y Accesorias</span>
            <span>Financiación</span>
            <span>Reviews y Comunidad</span>
        </div>
        <div className="border-b-2"/>
        <div className="h-24 flex flex-col justify-center text-right gap-4">
            <span>Toyota Mobility Service</span>
            <span>Toyota Gazoo Racing</span>
            <span>Toyota Híbridos</span>
        </div>
        <div className="border-b-2"/>
        <div className="h-24 flex flex-col justify-center text-right gap-4">
            <span>Concesionarios</span>
            <span>Test Drive</span>
            <span>Contacto</span>
        </div>
        <div className="border-b-2"/>
        <div className="h-52 flex flex-col justify-center text-right gap-4">
            <span>Actividades</span>
            <span>Servicios al Cliente</span>
            <span>Ventas Especiales</span>
            <span>Innovación</span>
            <span>Prensa</span>
            <span>Acerca de...</span>
        </div>
        </>) 
}