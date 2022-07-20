import { Area, Card, Description, Link, TitleRepo } from "./style";

const Repositorys = ({ repositorys, found, load }) => {
  return (
    <Area>
      {found === false ? (
        (load === false) ? (
        repositorys.map((repositorys) => {
          return (
            <Card key={repositorys.id}>
              <TitleRepo>{repositorys.name}</TitleRepo>
              <Description>{repositorys.description}</Description>
              <Link href={repositorys.html_url}>LINK</Link>
            </Card>
          );
        })
      ) : (<p>Carregando</p>)) : (
        <p>Não encontrado</p>
      )}
    </Area>
  );
};

export default Repositorys;
