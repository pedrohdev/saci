const Browser = require("../lib/services/Browser")

jest.setTimeout(10000)

test("Must not be received false", () => {
    return new Browser(`
        var input;

        scanf("%d", "input")
        printf("%d", input)
    `, 2, 2)
    .then(({ fail }) => expect(fail).toBe(false))
        .catch(err => console.error(err))
})