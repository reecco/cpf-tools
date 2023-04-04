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

## Ferramentas para CPF

### Geração de CPF

- Método GET
##### Endpoint
````
/v1/cpf/generate
````

Respostas do servidor
- Estrutura da resposta JSON bem sucedida do servidor
````json
{
  "cpf": "000.000.000-00",
  "code": 201
}
````

- Estrutura da resposta JSON mal sucedida do servidor
````json
{
  "message": "Ocorreu um erro ao gerar CPF.",
  "code": 500
}
````

<br>
<br>

### Geração de CPF por UF

- Método GET
##### Endpoint
````sh
/v2/cpf/generate/:uf   # substitua o parâmetro ':uf' por um valor válido
````

Respostas do servidor
- Estrutura da resposta JSON bem sucedida do servidor
````json
{
  "cpf": "000.000.000-00",
  "code": 201
}
````

- Estrutura da resposta JSON mal sucedida do servidor
````json
{
  "message": "Ocorreu um erro ao gerar CPF.",
  "code": 500
}
````

<br>
<br>

### Validação de CPF

- Método GET
##### Endpoint
````sh
/v1/cpf/validate/:cpf   # substitua o parâmetro ':cpf' por um valor válido
````


Respostas do servidor
- Estrutura da resposta JSON bem sucedida do servidor
````json
{
  "message": "CPF é válido.",
  "infos": {
    "uf": "São Paulo",
    "digit": 8
  },
  "code": 201
}
````

- Estrutura da resposta JSON mal sucedida do servidor
````json
{
  "message": "CPF é inválido",
  "code": 400
}
````

<br>
<br>
<br>

## Ferramentas para CNPJ

### Geração de CNPJ

- Método GET
##### Endpoint
````
/v1/cnpj/generate
````

Respostas do servidor
- Estrutura da resposta JSON bem sucedida do servidor
````json
{
  "cpf": "00.000.000/0001-00",
  "code": 201
}
````

- Estrutura da resposta JSON mal sucedida do servidor
````json
{
  "message": "Ocorreu um erro ao gerar CNPJ.",
  "code": 500
}
````

<br>
<br>

### Validação de CNPJ

- Método GET
##### Endpoint
````sh
/v1/cnpj/validate/:cnpj   # substitua o parâmetro ':cnpj' por um valor válido
````

<b>Atenção: </b> certifique-se de que o parâmetro fornecido tenha somente números.

Respostas do servidor
- Estrutura da resposta JSON bem sucedida do servidor
````json
{
  "message": "CNPJ é válido.",
  "code": 201
}
````

- Estrutura da resposta JSON mal sucedida do servidor
````json
{
  "message": "'CNPJ é inválido.",
  "code": 400
}
````