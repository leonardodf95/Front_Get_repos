import { useState, useCallback, useEffect} from 'react'
import UserGitHub from './API/UserGitHub';
import './App.css';
import Repositorys from './components/AreaRepositorys';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import PageContext from './context/PageContext';
import UserContext from './context/UserContext';

function App() {
  const [userRepository, setUserRepository] = useState()
  const [repositorys, setRepositorys] = useState([])
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [notFound, setNotFound] = useState(true);
  const [loading, setLoading] = useState(false)

  const getRepository = useCallback(async ()=>{
    if(userRepository === undefined){
      setLoading(false)
      setNotFound(false)
      return
    }
    setLoading(true)
    const infos = await UserGitHub.getUserInfo(userRepository)
    console.log('infos', infos)
    if(infos === 404 || infos.lenght === 0){
      setNotFound(true)
      return
    }
    setNotFound(false)
    const totalPage = Math.ceil(infos.public_repos / 100);
    setTotalPage(totalPage);
    const data = await UserGitHub.getUserRepository(userRepository, page)
    console.log('data', data)
    const resolvedResponse = await Promise.all(data)
    console.log('resolvedResponse', resolvedResponse)
    setLoading(false)
    setRepositorys(resolvedResponse)
  },[userRepository, page])

  useEffect(()=>{getRepository()},[getRepository])

  return (
    <UserContext.Provider value={{
      userRepository,
      setUserRepository
    }}>
      <PageContext.Provider value={{
        currentPage: page,
        setCurrentPage: setPage,
        totalPages: totalPage
      }}>
        <Title/>
        <SearchBar/>
        <Repositorys found={notFound} repositorys={repositorys} load={loading}/>

      </PageContext.Provider>
    
    </UserContext.Provider>
  );
}

export default App;
