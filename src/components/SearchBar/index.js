import {useContext} from 'react'
import UserContext from '../../context/UserContext'
import {Area} from './style'
import {Form, Input, Button} from 'antd'

const SearchBar = () => {
    const {setUserRepository} = useContext(UserContext)
    const searchUser = (e) => {
        setUserRepository(e.user)
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
        </Area>
    )
}
export default SearchBar