const Saci = require("../lib");
const fs = require("fs");
const drone = fs.readFileSync(`${__dirname}/drone.js`, 'utf8');

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

    console.log(`Recebeu "${output2}" e o valor esperado é "N"`)
    console.log(`Recebeu "${output}" e o valor esperado é "S"`)
})();