import { CarsComplete } from "@/type"

export const money = (num: number) => {
    let numString = num.toString()
    if(numString.length > 6){
       return `$ ${numString[0]}.${numString.slice(1,4)}.${numString.substring(4,7)}`
    }
    return `$ ${numString.substring(0,2)}.${numString.substring(3,5)}`
}


export const carType = (data: CarsComplete[], filter: string) => {
    if(filter === 'autos'){
        return data.filter(e => e.segment === 'Hatchback')
    }
    else if(filter === 'pickups'){
        return data.filter(e => e.segment === 'Pickups y Comerciales')
    }
    else if(filter === 'suvs'){
        return data.filter(e => e.segment === 'SUVs')
    }
    return data
}

export const carSelect = (data: CarsComplete[], filter: string) => {
    if(filter === 'Me/Ma'){
        return data.sort((a,b) => {
            if(a.price > b.price) return 1
            if(a.price < b.price) return -1
            return 0
        })
    }
    else if(filter === 'Ma/Me'){
        console.log('entra aca')
        return data.sort((a,b) => {
            if(a.price < b.price) return 1
            if(a.price > b.price) return -1
            return 0
        })
    }
    else if(filter === 'MasNu') {
        return data.sort((a,b) => {
            if(a.year > b.year) return -1
            if(b.year > a.year) return 1
            return 0
        })
    }
    else if(filter === 'MasVi'){
        return data.sort((a,b) => {
            if(a.year < b.year) return -1
            if(b.year < a.year) return 1
            return 0
        })
    }
    else {
        return data
    }
}