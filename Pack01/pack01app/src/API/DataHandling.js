import axios from 'axios'
export const listOwners = () => axios.get('https://api.github.com/repositories')
.then(({data}) => data)