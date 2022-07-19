import axios from "axios";
class UserGitHub {
  static async getRepositorys(user) {
    try {
      const response = await axios
        .get(`https://get-github-repositorys.herokuapp.com/${user}`)
        .then((data) => {
          return data;
        })
        .catch((error) => {
          throw error;
        });
        console.log('response', response)
        const repositorys = response.data
        return repositorys
    } catch (error) {
        console.log('error', error)
    }
  }
}

export default UserGitHub