# CPF/CNPJ API

## Validação e geração de CPF e CNPJ.

<br>

O uso deste projeto restringe-se somente para
  - fins acadêmicos;
  - testes que envolvam validação ou sistemas de cadastro;

É vedado o uso deste projeto para fins ilícitos, como **<u>falsidade ideológica</u>** que está previsto nos <b>artigos 297 a 302 do Código Penal</b>.

Este projeto foi desenvolvido com Node.js.

<br>

## Endpoints

#### URL base
````
https://cpf-tools.vercel.app/api/v2
````

### Métodos
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de geração ou validação |

### Respostas
| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `422` | A requisição foi entendida, mas contém parâmetros ou dados inválidos.|
| `500` | Erro interno no servidor. Indica uma situação inesperada que impede o atendimento da requisição. Recomenda-se verificar os logs do servidor para diagnosticar a causa. Entre em contato com a equipe de suporte se o erro persistir.|

<br>

## Ferramentas para CPF

### Geração de CPF

Endpoint
````
/cpf/generate
````

Respostas do servidor
- Response 200 (application/json)
````json
{
  "cpf": {
    "formatted": "000.000.000-00",
    "unformatted": "00000000000"
  }
}
````

- Response 500 (application/json)
````json
{
  "message": "Ocorreu um erro ao gerar CPF."
}
````

<br>

### Geração de CPF por UF

Endpoint
````sh
/cpf/generate/:uf   # substitua o parâmetro ':uf' por um UF válido
````

<details>
  <summary>Exibir lista de UF</summary>

  | Nome                   | UF  | Dígito |
  |------------------------|-----|--------|
  | Acre                   | AC  | 2      |
  | Alagoas                | AL  | 4      |
  | Amapá                  | AP  | 2      |
  | Amazonas               | AM  | 2      |
  | Bahia                  | BA  | 5      |
  | Ceará                  | CE  | 3      |
  | Distrito Federal       | DF  | 1      |
  | Espirito Santo         | ES  | 7      |
  | Goiás                  | GO  | 1      |
  | Maranhão               | MA  | 3      |
  | Mato Grosso            | MT  | 1      |
  | Mato Grosso do Sul     | MS  | 1      |
  | Minas Gerais           | MG  | 6      |
  | Pará                   | PA  | 2      |
  | Paraíba                | PB  | 4      |
  | Paraná                 | PR  | 9      |
  | Pernambuco             | PE  | 4      |
  | Piauí                  | PI  | 3      |
  | Rio de Janeiro         | RJ  | 7      |
  | Rio Grande do Norte    | RN  | 4      |
  | Rio Grande do Sul      | RS  | 0      |
  | Rondônia               | RO  | 2      |
  | Roraima                | RR  | 2      |
  | Santa Catarina         | SC  | 9      |
  | São Paulo              | SP  | 8      |
  | Sergipe                | SE  | 5      |
  | Tocantins              | TO  | 1      |
</details>

<br>

Respostas do servidor
- Response 200 (application/json)
````json
{
  "cpf": {
    "formatted": "000.000.000-00",
    "unformatted": "00000000000"
  }
}
````

- Response 404 (application/json)
````json
{
  "message": "UF não encontrado."
}
````

- Response 500 (application/json)
````json
{
  "message": "Ocorreu um erro ao gerar CPF."
}
````

<br>

### Validação de CPF

Endpoint
````sh
/cpf/validate/:cpf   # substitua o parâmetro ':cpf' por um valor válido
````

Respostas do servidor
- Response 200 (application/json)
````json
{
  "message": "CPF é válido."
}
````

- Response 400 (application/json)
````json
{
  "message": "Forneça um CPF válido."
}
````

- Response 422 (application/json)
````json
{
  "message": "CPF é inválido."
}
````

<br>

## Ferramentas para CNPJ

### Geração de CNPJ

Endpoint
````
/cnpj/generate
````

Respostas do servidor
- Response 200 (application/json)
````json
{
  "cnpj": {
    "formatted": "00.000.000/0001-00",
    "unformatted": "00000000000100"
  }
}
````

- Response 500 (application/json)
````json
{
  "message": "Ocorreu um erro ao gerar CNPJ."
}
````

<br>

### Validação de CNPJ

Endpoint
````sh
/cnpj/validate/:cnpj   # substitua o parâmetro ':cnpj' por um valor válido
````

<b>Atenção: </b> certifique-se de que o parâmetro fornecido tenha somente números.

Respostas do servidor
- Response 200 (application/json)
````json
{
  "message": "CNPJ é válido."
}
````

- Response 422 (application/json)
````json
{
  "message": "'CNPJ é inválido."
}
````