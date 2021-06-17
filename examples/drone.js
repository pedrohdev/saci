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