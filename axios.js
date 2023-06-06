import axios from 'axios'

const snorlax = async () => {

const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/snorlax")

return data
}