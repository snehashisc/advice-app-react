import axios from "axios"

export const fetchAdvice = async () => {
    try {
    const {data: {slip}} = await axios.get('https://api.adviceslip.com/advice');
        return slip.advice
        }
        catch(error) {
            console.log(error)
        };
}