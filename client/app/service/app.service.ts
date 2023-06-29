import axios from 'axios'

export const CarsGet = async () => {
    try {
        const api = await axios.get('https://challenge.egodesign.dev/api/models/')
        return api.data
    } catch (error) {
        console.log(error)
    }
}