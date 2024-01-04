import axios from "axios"

export async function EncurtaNet(url: string){
    try {
        const response = await axios.get(
            `https://encurta.net/api`,
            {
                params:{
                    api: '7bfb6161103a8b8b08dc8a770e9b5d39cc415937',
                    url
                }
            }
        )
        return response.data
    } catch (error) {
        return 'null'
    }
    
}