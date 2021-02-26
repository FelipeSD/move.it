# Meu registro de aprendizagem
### Dia 1
No primeiro dia, foi explicado o conceito de como funcionam as aplicações REST que consomem os dados de uma API. Uma 
aplicação desenvolvida dessa maneira facilita a criação do frontend em plataformas diferentes e com tecnologias frontend 
diferentes tanto
para Web, como também para mobile: Android e Ios.

A tecnologia para o desenvolvimento de aplicações ‘web’ frontend utilizada para construir esse projeto foi o React. 
Uma das coisas que aprendi nesse primeiro dia, foi a possibilidade de obter as propriedades children dos componentes do React.

### Dia 2
No dia 2, foi apresentado os conceitos de como funcionam o framework Next.js que é utilizado para renderizar as páginas 
react no lado do servidor primeiro, antes de disponibilizar para o utilizador. Isso facilita muito a otimização do SEO 
(Search Engine Optimization — otimização para mecanismos de busca) além de tornar a apresentação muito mais rápida para 
o utilizador.

Nesse dia foi possível implementar, inicialmente, o mecanismo contador do projeto, que a partir de determinados minutos, 
a página venha ser atualizada segundo por segundo, durante a contagem regressiva.

### Dia 3
Esse dia, para mim, foi o mais importante, porque aprendi algo fundamental no React que é a comunicação entre componentes 
(separados), como eles se comunicam entre si. Esse problema era sempre onde eu não sabia o que fazer, mas com o 'context' 
Api do React foi possível solucionar de forma simples o contexto de desafios dessa aplicação.

Além disso, foi possível entender como funciona os React fragments (que são divs que não são adicionados na 'DOM') e 
condicionais do React para alternar entre componentes dependendo do estado.

O cálculo para lidar com o nível atual do utilizador foi sensacional também.

### Dia 4
No dia 4, foi criado mais um context API para o componente Countdown, identificando o melhor local para se utilizar 
múltiplos contextos dentro da aplicação. Aprendi sobre como gerar notificações pelo navegador e utilizar Audio API.

## Dia 5
No último dia do NLW #4 foi trabalhado o conceito e uso de ‘cookies’ pela dependência js-cookie, para armazenar os dados
da aplicação (mesmo que por breve tempo). Aprendi como se usa o getServerSideProps do Next.js, que atua como intermediador
entre back-end e front-end, onde é possível manipular quais dados serão repassados do Next.js para a ‘interface’ em React.
Neste dia foi possível também, compreender os conceitos de Componentes de modal tradicionais no React (sem uso de biblioteca).

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with 
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on 
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as 
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions 
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the 
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) 
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
