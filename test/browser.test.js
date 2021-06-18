const Browser = require("../lib/services/Browser")

jest.setTimeout(20000)

test("Must be received two", () => {
    return new Browser({
        input: 2,
        code: `
            var input;

            scanf("%d", "input")
            printf("%d", input)
        `
    })
    .then(output => expect(output).toEqual("2"))
        .catch(err => console.error(err))
})