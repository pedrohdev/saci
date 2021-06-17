const Saci = require("../lib")

new Saci({
    input: `
    30
    50
    80
    80
    60    
    `,
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
    `
}).then(output => {
    console.log(`Recebeu "${output}" e o valor esperado é "S"`)
}).catch(err => {
    console.log(err)
})

new Saci({
    input: `
        475
        100
        50
        100
        30
    `,
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
    `
}).then(output => {
    console.log(`Recebeu "${output}" e o valor esperado é "N"`)
}).catch(err => {
    console.log(err)
})