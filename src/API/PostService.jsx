import axios from 'axios'

export class PostService {
  static async getPosts() {
    return await axios.get('https://jsonplaceholder.typicode.com/posts')
  }
}