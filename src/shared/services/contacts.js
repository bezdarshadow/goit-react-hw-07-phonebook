import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://624d4b14c172b69d69307ddc.mockapi.io/api/v1/contacts'
})

export const fetchContacts = async () => {
    const { data } = await instance.get('/')
    return data;
}

export const addContact = async (data) => {
    const {data: result} = await instance.post('/', data)
    return result;
}

export const removeContact = async (id) => {
    const {data: result} = await instance.delete(`/${id}`)
    return result
}