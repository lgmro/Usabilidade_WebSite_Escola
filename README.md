# WebSite Hogwarts de Azkaban

## Integrantes:
1. [Marina Fernandes](https://github.com/marileite96) 
2. [Bernardo Mello](https://github.com/bmlogs64)
3. [Lucas Gabriel](https://github.com/lgmro)
4. [Luis Carlos](https://github.com/Luis1988xp)

## Informações úteis:
- Aplicação Web desenvolvida para a disciplina de Usabilidade e Desenvolvimento Web e Mobile. Com intuito de permitir ao um funcionário da escola cadastrar alunos, professores, turmas e disciplinas. Realize a matricula do aluno em uma turma e também faça o cadastro da nota do aluno através de um boletim, que define se aluno foi aprovado ou não (para ser aprovado precisa de uma nota >= 6);
- Caso você for cadastrar um novo professor, que lecione uma outra disciplina não disponível no sistema, é importa realizar o cadastro dessa nova disciplina primeiro na aba de Disciplinas, para que a mesma apareça durante o cadastro do professor;
- Para cadastrar uma turma é importante ter a disciplina e o professor cadastrado no sistema. O botão de exibir alunos cadastrados na turma, só irá exibir alunos, depois que você vincular aluno com a turma, através da aba de Matricular;
- Para cadastrar um boletim para um aluno, é importante ter turmas cadastras e seria interessante fazer a matricula do aluno na turma, através da aba de Matricular;
- Todo aluno novo é cadastrado no módulo 01, para ele mudar o aluno de módulo o funcionário precisa realizar a matricula do aluno em outra turma na aba de Matricular, informando a nova turma, o aluno, o novo módulo e a turma antiga que ele foi aprovado. O aluno precisa ter um boletim registrado na turma do módulo anterior com status de aprovado. 

## Requisitos
1. [Baixe o Node.js](https://nodejs.org/en/)
2. [Baixe o VSCode](https://code.visualstudio.com/)
3. [Baixe ou clone a api do WebSite](https://github.com/lgmro/Usabilidade_API_Escola)


## Como rodar esse projeto localmente
1. Execute `npm install`
2. Execute a [api do WebSite](https://github.com/lgmro/Usabilidade_API_Escola), seguindo as intruções no README da api
2. Execute o WebSite com o `npm start`

O projeto será iniciado na porta 3000. Poderá usar a seguinte url para teste: `localhost:3000/`