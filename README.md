## Simple Api Test

### Infra

- criar uma imagem mysql no docker. ex.: `mysql:5.7`
- duplicar arquivo '.env.example' e renomear para somente '.env'
- preencher arquivo '.env' com os valores necessários

### Como iniciar

##### Obs.: Necessário já ter um database criado.

```
npm install

npm run migration:run

npm run dev
```

### Rotas

```js
/users (GET|POST|DELETE)
```
