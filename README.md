Usarei essa sessão para tomar notas de assuntos que achei interessante:

Sempre a primeira coisa é criar package.json:
    - npm init -y

Segundo passo:
 - O Node não entende o typescript por padrão, por isso é necessario instalar como  Dependecia de Desenvolvimento o TypeScript
    - npm i -D typescript
 - Com o TypeScript instalado é preciso criar um arq de configurações para ele
    - npx tsc --init
    - Depois modificar o target para 2020 em diante

Terceiro passo:
 - Importar o Fastify, que é o framework que estamos usando para dar a base da nossa aplicação
    - npm i fastify

Quarto passo:
 - Como o Node não foi construido com o TypeScript, e sim especficamente para JavaScript. É necessario instalar junto o @types como Dependencia de Desenvolvimento
    - npm install -D @types/node
        - npx tsc scr/server.js > para criar o arq em JS para rodar
 - Agora, para não ficar criando os arq em JS e "sujar" o desenvolvimento, utilizamos a Ferramente tsx, e instalamos como Dependencia de Desenvolvimento
    - npm install tsx -D 
    - converte automaticamente TS para JS (Utlizar somente em Dev)
    - npx tsx src/server.js > para rodar o arq 
        - equivalende a node src/server.js

Quinto passo:
 - Instalar como Dependencia de Desenvolvimento o ESLint que padroniza o codigo na hora da aplicação. 
    - npm i eslint -D