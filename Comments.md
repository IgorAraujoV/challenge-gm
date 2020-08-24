#  Objetivo

### Objetivos Iniciais:
1. Uma tela inicial com um campo para receber o nome ou apelido de um usuário no
GitHub;
2. Se o usuário inserido na tela inicial for um usuário válido (se ele existir), os seguintes
dados deverão ser exibidos:
2.1. Apelido, avatar, biografia e URL do usuário;
2.2. Um mapa com um marcador na localização do usuário;
2.3. Uma lista com os repositórios aos quais o usuário deu estrela no GitHub.

### Objetivos extras: 
1. Na lista de repositórios, permitir que um usuário logado dê ou remova uma estrela para
cada repositório do usuário buscado;
2. Criação de testes.

### Passo a Passo
1. Para iniciar, primeiramente fui pesquisar como a API do Github retorna dados de localização do usuário
pois já tinha em mente que não seria localização exata com coordenadas. Com essa limitação da API, 
para mostrar no mapa um Marcador pesquisei e encontrei a API do Google Maps, onde passo o estado ou
cidade do usuário e ela me da as coordenadas.
2. Decidi então que optaria por usar **Redux** e **Redux Saga** pra gerenciar o estado de maneira global e controlar *Side Effects*, já que iria guardar os usuários e eles seriam usados por componentes diferentes, além da organização e do padrão que o redux traz. 
3. Até o momento a aplicação consistia em receber o nome do usuário, mostrar as informações e o ponto no mapa. Com o ponto extra, onde iria haver a necessidade de ter um usuário logado, para dar e remover estrelas, mudou um pouco a estrutura. Criei o login e novamente com o redux manipulei os repositorios favoritados.

### Problemas 
1. Problemas com react-router e redux saga juntos, na hora de buscar o usuario, onde eu primeiro buscava no GitHub a localização e depois chamava a Api do Maps em sequencia, senti a necessidade de mudar de rota somente após a conclusão da requisição. Por isso, configurei o History, alterei BrowerRouter pra aceitar o history e assim poder controlar as rotas fora dos componentes. Não sei se por problemas de versões, essa abordagem não deu certo, apesar das pesquisas pra corrigir. Como estava sem tempo decidi seguir, e ouvir as mudanças do redux no proprio componente e mudar a rota nele.
2. Login do usuario com a API do Github. Para dar e remover estrelas, tentei fazer integrado com o Git mesmo, pra isso, primeiro, tentei realmente autorizar o usuário, passando login e senha, mas eu vi na Documentação que essa maneira esta descontinuada, e que o correto seria fazer a requisição e pegar o Token pra autenticar, mas isso precisaria criar configurações a mais no Git, criar o aplicativo la, definir rotas de CallBack, pra realmente eles autorizarem e me retornarem o Token. Bom, isso levaria um tempo então decidi manipular localmente as estrelas, guardando as informações somente no Redux, sem dar a estrela de fato no repositorio no Github
3. O terceiro e ultimo principal, foi com a publicação, decidi publicar no **Netlify** onde é bem simples, mas o Refresh da pagina estava causando um *Page Not Found* mesmo estando em uma rota válida. Com isso alterei o código pra redirecionar para o Login e o problema se manteve, ainda dava 404. Após um tempo pesquisando o erro, achei o solução e adicionei o arquivo _redirects, pro Netlify entender que deveria redirecionar e então deu certo.

## Conclusão
Bom, é isso, eu publiquei a aplicação e ela pode ser acessada [aqui](https://master--stupefied-goldwasser-b617e9.netlify.app/) :)


by **Igor Araujo.**