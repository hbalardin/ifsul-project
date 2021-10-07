# Projetos II - Henrique Balardin e Henrique Jost. 2021.


## 🚀 Executando o projeto

Antes de qualquer coisa, você precisa ter o [Git](https://git-scm.com), o [Yarn](https://yarnpkg.com/) e o [Node.js](https://nodejs.org/en/) instalado na sua máquina. Feito isso, você pode prosseguir.

```bash
# Clone este repositório:
$ git clone https://github.com/hbalardin/ifsul-react-project

# Acesse à pasta do projeto:
cd ifsul-react-project

# Instale as depêndencias:
yarn

# Execute a aplicação em modo de desenvolvimento:
yarn start
```

Caso a página não abrir automaticamente, acesse: http://localhost:3000

---


## 🚀 Como contribuir

Uma vez que o projeto já está devidamente instalado, seguiremos os padrões do **GitFlow** para fazer contribuições.

```bash
# Mude para a branch de desenvolvimento:
$ git checkout development

# Certifique-se que sua branch local esteja atualizada conforme o repositório na nuvem
$ git pull origin development

# Crie uma nova branch para a sua funcionalidade
$ git checkout -b nome-da-branch
```

Agora você já pode desenvolver tranquilamente, o repositório na nuvem e sua versão local estão em "caminhos distintos". Para salvar suas alterações basta realizar os `commits` e criar uma `pull request` da sua branch para a branch `development`:

```bash
# Adicione suas alterações
$ git add .

# Realize um commit para salvar as suas alterações
$ git commit -m "descrição do commit"

# Envie uma pull request com suas alterações para a branch development
$ git push origin development
```

---
