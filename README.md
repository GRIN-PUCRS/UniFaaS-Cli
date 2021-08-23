# uni-faas CLI

A CLI for UniFaaS [In development]

# License

MIT - see LICENSE

# Unifaas


## Requisitos

- Docker: Docker desktop (MacOS)
- NodeJS: versão stable
- Yarn: instalação utilizando homebrew
  - brew install yarn

##Instalação

1. Baixar o repositório contendo a aplicação:

```
git clone https://github.com/marqueswsm/UniFaaS-Cli.git
```

2. Entre no diretório e execute:

```
yarn link
```

3. Veriﬁcar instalação:

```
uni-faas
```

O resultado abaixo deve ser apresentado:

```
uni-faas version 0.0.1

version (v)         Output the version number
build:function      Create a function image
call:function       Call a function
deploy:function     Deploy a function image
generate:function   Create a function template
start:function      Start a deployed function
stop:function       Stop a running function
help (h)            -
```

## Exemplo de Uso

1. Gerar um template de função:

```
uni-faas generate:funcion --virt docker --name function O arquivo MyFunction/index.js pode ser alterado
```

2. Gerar uma imagem de container:

```
uni-faas build:function --virt docker --name function
```

3. Coloque a função em execução:

```
uni-faas deploy:function --virt docker --name function
```

Resultado esperado:

```
Function Deployed
http://localhost:8080/api/function
```

| A primeira vez pode demorar, porque é necessário fazer o download de uma imagem de container com node.

4. Acesse o endereço e receba a seguinte mensagem:

```
Please pass a name on the query string or in the request body
```

5. Acesse novamente enviado o a query name:

```
Hello wagner
```

| http://localhost:8080/api/function?name=wagner

## Unikernel

- A versão do OSv com KVM foi testada apenas em uma máquina ubuntu.

