import axios from 'axios'

const API ='http://localhost:4000/api'

export const tarRequest = (tarea) => axios.post(`${API}/tareas`,tarea)