import axios from "axios"

export const carDetails = async (id: string) => {
    try {
        const api = await axios.get(`https://challenge.egodesign.dev/api/models/${id}/`)
        return api.data
    } catch (error) {
        console.log(error)
    }
}