'use client'

interface Props {
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
    sort: string
    setSort: React.Dispatch<React.SetStateAction<string>>
}

export default function CarFilter({filter, setFilter, setSort, sort}: Props){
    const handleSelect = (e: any) => {
        setSort(e.target.value)
    }

    const handleSelectFilter = (e: any) => {
        setFilter(e.target.value)
    }
    
    
    return(<>
        <div className="w-10 text-whiteGrey max-sm:hidden">
            <span className="font-semibold text-sm">Filtrar por</span>
        </div>
        <div className="w-80 max-sm:hidden">
            {
                filter === 'todos'
                ? <span className="px-8 py-2 text-sm bg-personalGrey rounded-full cursor-pointer">Todos</span>
                : <span className="px-8 py-2 text-sm cursor-pointer" onClick={() => setFilter('todos')}>Todos</span>
            }
            {
                filter === 'autos'
                ? <span className="px-8 py-2 text-sm bg-personalGrey rounded-full cursor-pointer">Autos</span>
                : <span className="px-8 text-sm cursor-pointer" onClick={() => setFilter('autos')}>Autos</span>
            }
            {
                filter === 'pickups'
                ? <span className="px-8 py-2 text-sm bg-personalGrey rounded-full cursor-pointer">Pickups y Comerciales</span>
                : <span className="px-8 text-sm cursor-pointer" onClick={() => setFilter('pickups')}>Pickups y Comerciales</span>
            }
            {
                filter === 'suvs'
                ? <span className="px-8 py-2 text-sm bg-personalGrey rounded-full cursor-pointer">SUVs y Crossovers</span>
                : <span className="px-8 text-sm cursor-pointer" onClick={() => setFilter('suvs')}>SUVs y Crossovers</span>
            }
        </div>
        {/* <div className="w-10 max-sm:w-[50%]"> */}
        <div className="hidden max-sm:inline">
            <select className="text-sm font-semibold text-whiteGrey max-w-[105px]" onChange={handleSelectFilter}>
                <option value="todos">Todos</option>
                <option value="autos">Autos</option>
                <option value="pickups">Pickups y Comerciales</option>
                <option value="suvs">SUVs y Crossovers</option>
            </select>
        </div>
        <div>
        {/* <div className="w-10 max-sm:w-[50%] max-sm:"> */}
        <select className="text-sm font-semibold text-whiteGrey max-w-[105px]" onChange={handleSelect}>
            <option value="Ordenar Por">Ordenar por</option>
            <option value="Me/Ma">De menor a mayor precio</option>
            <option value="Ma/Me">De mayor a menor precio</option>
            <option value="MasNu">Mas nuevos primero</option>
            <option value="MasVi">Mas viejos primero</option>
        </select>

        </div>
    </>)
}