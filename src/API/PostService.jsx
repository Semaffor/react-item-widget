import axios from 'axios'

export class PostService {
  static async getPosts(limit = 10, page = 1) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      }
    })
  }
}