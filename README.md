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
Primeiro será necessário criar uma conta na [Zenvia](https://app.zenvia.com/home/api) , no [AUDD](https://audd.io/), [Spotfy](https://developer.spotify.com/documentation/web-api/) e [Vagalume](https://api.vagalume.com.br/docs), para obter os tokens e substituir `.env` com a seguinte estrutura: 
```
#Nome do Projeto 
APP_NAME=Feature-Zenvia-D1

#TOKEN
ZENVIA_TOKEN=
AUDD_TOKEN=

#KEYS
VAGALUME_KEY=
```
## Features

### Identificação de música por meio de audio: 
### Possibilidade de seguir artista no Spotfy:
### Possibilidade se salvar a música em uma playlist:
### Sugestão de musicas relacionadas:
