import { Area, Card, Description, Link, TitleRepo } from './style'

const Repositorys = ({repositorys}) => {

    return(
        <Area>
            {
               (repositorys.lenght !== 0) ?
               repositorys.map((repositorys)=>{
                    return(
                    <Card>
                        <TitleRepo>{repositorys.name}</TitleRepo>
                        <Description>{repositorys.description}</Description>
                        <Link href={repositorys.html_url}>LINK</Link>
                    </Card>)
               }) : <p>Não encontrado</p>
            }
        </Area>
    )
}

export default Repositorys