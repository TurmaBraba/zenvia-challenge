![Baner](https://i.imgur.com/1tIWVhN.gif)

# Desfio pair programing chapter dev

## Objetivo
Criar um WhatsApp Bot para reconhecimento de música. Pensando nisso, algumas features adicionais foram criadas: 

### Estrutura do projeto
Para esse projeto foi adotado o conceito de DDD (Domain driven design)

- application 
- bin
- commun

  Nela ficam trechos de código que podem ser úteis em diversos pontos do projeto
- config

  Contém as configurações gerais da aplicação  
- interface
  - controllers
  - http
  
    Tem o objetivo guardar todas as chamadas externas a api da aplicação
- objects

** Apis utilizadas **

- [Vagalume para mostrar músicas relacionadas](https://api.vagalume.com.br/docs/)
- [Spotfy para criar playlist e seguir artista](https://developer.spotify.com/documentation/web-api/)
- [AUDD para o reconhecimento do audio](https://audd.io/)

## Como executar

**1.** Clone o repositório

```shell
git clone git@github.com:TurmaBraba/zenvia-challenge.git
```

**2.** Instale as dependências

```shell
npm install
```

**3.** Será necessário criar uma conta na [Zenvia](https://app.zenvia.com/home/api) , no [AUDD](https://audd.io/), [Spotfy](https://developer.spotify.com/documentation/web-api/) e [Vagalume](https://api.vagalume.com.br/docs), para obter os tokens e substituir `.env` com a seguinte estrutura: 
```
#Nome do Projeto 
APP_NAME=Feature-Zenvia-D1

#TOKEN
ZENVIA_TOKEN=
AUDD_TOKEN=

#KEYS
VAGALUME_KEY=
```

**4.** Execute a aplicação 

```shell
npm start
```
## Features

### Identificação de música por meio de audio: 
Com um audio enviado pelo o usuário nós identificamos a música que o usuário está ouvindo e mandamos informações sobre aquela música
### Possibilidade de seguir artista no Spotfy:
Com a música identificado o usuário poderá optar por seguir o artista em sua conta do spotify.

### Possibilidade se salvar a música em uma playlist:
Após o usuário ter a música identificada através do áudio enviado, o mesmo poderá criar uma playlist, em sua conta spotify, e adicionar a mesma como uma faixa.

### Sugestão de musicas relacionadas:
Através da música identificada se retorna para o usuário algumas  sugestões de músicas relacionadas que que talvez ele goste.

