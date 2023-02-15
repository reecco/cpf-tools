<h2>CPF API</h2>

<h3>API para validação e geração de CPFs.</h3>

<br>

O uso deste projeto restringe-se somente para
  - fins acadêmicos;
  - testes que envolvam validação ou sistemas de cadastro;

É vedado o uso deste projeto para fins ilícitos, como <b>falsidade ideológica</b> que está previsto nos <b>artigos 297 a 302 do Código Penal</b>.

Este projeto foi desenvolvido com
- Node.js

<br>

### Endpoints da API
É necessário fazer chamadas HTTP para URL junto com endpoint

<br>

URL base
````
https://cpf-tools.vercel.app
````

<br>

Geração de CPF

- Método GET
````
/v1/generate
````
- Estrutura da resposta bem sucedida do servidor
````json
{
  "cpf": "000.000.000-00",
  "code": 200
}
````

- Estrutura da resposta mal sucedida do servidor
````json
{
  "message": "Ocorreu um erro ao gerar CPF",
  "code": 400
}
````

<br>

Validação de CPF

- Método GET
````
/v1/validate/:cpf
````
- Parâmetros da requisição
````
/v1/validate/000.000.008-00
````

- Estrutura da resposta bem sucedida do servidor
````json
{
  "message": "CPF é válido.",
  "infos": {
    "uf": "São Paulo",
    "digit": 8
  },
  "code": 200
}
````

- Estrutura da resposta mal sucedida do servidor
````json
{
  "message": "CPF é inválido",
  "code": 400
}
````