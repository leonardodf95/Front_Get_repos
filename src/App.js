import { useState, useCallback, useEffect} from 'react'
import UserGitHub from './API/UserGitHub';
import './App.css';
import Repositorys from './components/AreaRepositorys';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import UserContext from './context/UserContext';

function App() {
  const [userRepository, setUserRepository] = useState()
  const [repositorys, setRepositorys] = useState([])

  const getRepository = useCallback(async ()=>{
    const data = await UserGitHub.getRepositorys(userRepository)
    console.log('data', data)
    const resolvedResponse = await Promise.all(data)
    console.log('resolvedResponse', resolvedResponse)
    setRepositorys(resolvedResponse)
  },[userRepository])

  useEffect(()=>{getRepository()},[getRepository])

  return (
    <UserContext.Provider value={{
      userRepository,
      setUserRepository
    }}>
      <Title/>
      <SearchBar/>
      <Repositorys repositorys={repositorys}/>
    
    </UserContext.Provider>
  );
}

export default App;
