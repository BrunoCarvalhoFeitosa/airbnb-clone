<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/BrunoCarvalhoFeitosa/airbnb-clone">
    <img src="public\images\fav.png" alt="Logo" width="100" weight="100" />
  </a>

  <p align="center">
    Este projeto foi feito em Next.js, Typescript, Prisma, Cloudinary e TailwindCSS e basicamente consiste num clone da plataforma de aluguel de casas, apartamentos, motorhomes chamada Airbnb. Em resumo, a aplicação possui sistema de autenticação JWT, é possível cadastrar-se através de uma conta do Google, GitHub ou então criando seu próprio usuário. Logando em sua conta, você poderá filtrar os resultados pela busca do header, inserindo basicamente o país para onde deseja viajar e inserindo o número de hóspedes que estarão com você, os resultados serão refinados e devolvidos em tela, ao clicar no card desejado, você será redirecionado para a página da casa ou apartamento, lá conterá as informações sobre o local, o valor da diário e lá você poderá fazer favoritar o local ou então fazer sua reserva, se assim desejar. Caso você possua uma propriedade e queira anuncia-la, também é possível, no header terá um botão dizendo para anunciar seu espaço, ao clicar, será aberto um modal, onde você preencherá informações pertinente ao país onde a sua propriedade está localizada, quando hóspedes você aceita, quantos quartos e banheiros ela possui e valor da diário que você deseja cobrar. Ao cadastrar essa propriedade, ela estará disponível para todos os usuários visualizarem e fazerem reservas e caso você deseje, é possível excluir esta propriedade do sistema.
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
        <li><a href="#hospedagem">Hospedagem</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Iniciando o projeto</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#license">Licenças</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto
Através do Prisma, foi possível modelar o banco de dados da aplicação, onde foi possível criar diversas model's sendo uma para Usuários (novos usuários cadastrados pelo sistema ou pelo Google e GitHub), outra model para a listagem da propriedade anunciada e outra para a reserva realizada pelo usuário.

### Projeto

#### Home

https://github.com/BrunoCarvalhoFeitosa/airbnb-clone/assets/46093815/ace1dbb1-7f20-419e-a4d9-d7da9a30d6d3

#### Overview / Principais funcionalidades

https://github.com/BrunoCarvalhoFeitosa/airbnb-clone/assets/46093815/4a42cb4d-895a-44d5-9a1f-c7fffa53a409

#### Fluxo de aluguél

https://github.com/BrunoCarvalhoFeitosa/airbnb-clone/assets/46093815/a6d80735-21e6-419e-94b7-87e1cc35e5b0

### Feito com

* [Next.js](https://nextjs.org)
* [Typescript](https://www.typescriptlang.org)
* [Prisma](https://www.prisma.io)
* [Cloudinary](https://cloudinary.com)
* [TailwindCSS](https://tailwindcss.com)
* [Vercel](https://vercel.com)

### Hospedagem

A aplicação está em produção neste link: (https://bruno-carvalho-feitosa-spotify-clone.vercel.app).

<!-- GETTING STARTED -->
## Iniciando o projeto

Primeiramente será necessário clonar este projeto em (https://github.com/BrunoCarvalhoFeitosa/airbnb-clone.git), após o download será necessário abrir este projeto no seu editor e no terminal digitar npm install ou yarn, posteriormente é só rodar em seu terminal o comando npm run dev ou yarn dev, após isso, a página será aberta em seu navegador.

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/BrunoCarvalhoFeitosa/airbnb-clone.git
   ```
2. Instale os pacotes do NPM
   ```sh
   npm install ou yarn
   ```
   
3. Inicie o projeto
   ```sh
   npm run dev ou yarn dev
   ```   

<!-- LICENSE -->
## License

Distribuído sob a licença MIT.

<!-- CONTACT -->
## Contato

Bruno Carvalho Feitosa - [GitHub](https://github.com/BrunoCarvalhoFeitosa) - [LinkedIn](https://www.linkedin.com/in/bruno-carvalho-feitosa/)
