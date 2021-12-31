import axios from 'axios'
export const listOwners = () => axios.get('https://api.github.com/repositories')
.then(({data}) => data)

export const getFiles = (owner, name) => axios
.get(`https://api.github.com/repos/${owner}/${name}`)
.then(({data}) => data)
