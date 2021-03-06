<p align="center">
  <img width="350" src="content/logo.gif">
</p>

<h1 align="center">Ambiente Saci 🌪️</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/saaci">
    <img src="https://badge.fury.io/js/saaci.svg">
  </a>
</p>
<p align="center">
 <a href="https://olimpiada.ic.unicamp.br/saci/cursos/intro_js/1/">Saci</a> é um ambiente de aprendizagem desenvolvido para o ensino de programação. Todas as soluções em Javascript da <a href="https://olimpiada.ic.unicamp.br/">OBI</a> devem ser feitos com ele, obedecendo os comandos de <code>scanf</code> e <code>printf</code> para entrada e saída, porém não existe nenhum interpretador para node.js e por isso fiz essa implementação com <a href="https://www.npmjs.com/package/puppeteer">puppeteer</a>
</p>



<h2 align="center">Como instalar? :rocket:</h2>

```
$ npm install saaci
```

<h2 align="center">Como usar? 💻</h2>


```js
const Saci = require("saaci");
const fs = require("fs");
const drone = fs.readFileSync(`${__dirname}/drone.js`, 'utf8'); // Lê o exercício, é necessário o 'utf8'

(async () => {
    const output = await new Saci({
        code: drone,
        input: `
            30
            50
            80
            80
            60    
        `
    })
    
    // Ou coloque o código direto no objeto
    
    const output2 = await new Saci({
        code: `
            var A, B, C;
            var H, L;
            
            scanf("%d%d%d", "A", "B", "C");
            scanf("%d%d", "H", "L");
            
            var ok = (A <= H && B <= L) || (B <= H && C <= L) || (C <= H && A <= L) ||
                (B <= H && A <= L) || (C <= H && B <= L) || (A <= H && C <= L);
            
            if (ok)
                printf("S");
            else
                printf("N");
        `,
        input: `
            475
            100
            50
            100
            30
        `
    })

    console.log(`Recebeu "${output2}" e o valor esperado é "N"`) // Recebeu "N" e o valor esperado é "N"
    console.log(`Recebeu "${output}" e o valor esperado é "S"`) // Recebeu "S" e o valor esperado é "S"
})();
```

## Aprenda os comandos do Ambiente Saci 🌪️🎓

### [Todos os comandos](https://olimpiada.ic.unicamp.br/saci/cursos/intro_js/)

## Author

| [<img src="https://avatars.githubusercontent.com/u/64736691?v=4" width="155"><br><sub>@pedrohdev</sub>](https://github.com/pedrohdev) |
| :---: |
