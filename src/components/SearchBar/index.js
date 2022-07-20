import {useContext} from 'react'
import UserContext from '../../context/UserContext'
import {Area} from './style'
import {Form, Input, Button} from 'antd'
import Pagination from './Pagination'
import PageContext from '../../context/PageContext'

const SearchBar = () => {
    const {setUserRepository} = useContext(UserContext)
    const {setCurrentPage} = useContext(PageContext)
    const searchUser = (e) => {
        setUserRepository(e.user)
        setCurrentPage(1)
    }
    
    return (
        <Area>
            <Form layout='inline' onFinish={searchUser}>
                <Form.Item label='Usuário' name='user'>
                    <Input placeholder='Digite o usuário'/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType="submit">Procurar</Button>
                </Form.Item>
            </Form>
            <Pagination/>
        </Area>
    )
}
export default SearchBar