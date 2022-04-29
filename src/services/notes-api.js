import axios from 'axios'

const URL = 'https://stan-notes-api.herokuapp.com/notes/'

// Get all posts
export const getNotes = () => {
  return axios.get(URL)
}

// Get one post
export const getNote = (id) => {
  return axios.get(`${URL}${id}`)
}

// Create post
export const createNote = (createdNote) => {
  return axios.post(`${URL}`, createdNote)
}

// Create post
export const createLocation = (created) => {
  return axios.post(`${URL}`, created)
}

// Delete post
export const deleteNote = (id) => {
  return axios.delete(`${URL}${id}`)
}

// Update post
export const editNote = (id, updatedNote) => {
  return axios.put(`${URL}${id}`, updatedNote)
}