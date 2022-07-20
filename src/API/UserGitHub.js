import axios from "axios";
class UserGitHub {
  static async getUserInfo(user) {
    try {
      //Obtive erro no deploy da minha aplicação e pelo espaço de tempo decidi fazer diretamente
      // const response = await axios.get(
      //   `https://get-github-repositorys.herokuapp.com/${user}`
      // );

      const response = await axios.get(`https://api.github.com/users/${user}`)

      
      return response.data;
    } catch (error) {
      console.log('error', error)
      return error.response.status
    }
  }
  static async getUserRepository(user, page) {
    try {
      //Obtive erro no deploy da minha aplicação e pelo espaço de tempo decidi fazer diretamente
      // const response = await axios.get(
      //   `https://get-github-repositorys.herokuapp.com/repos/${user}?page=${page}`
      // );
      const response = await axios.get(`https://api.github.com/users/${user}/repos?page=${page}&per_page=100`)
      return response.data
    } catch (error) {
      console.log('error', error)
      return error.response.status
    }
  }
}

export default UserGitHub;
