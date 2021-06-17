const puppeteer = require('puppeteer')

class Browser {
    constructor({ code, input }){
        return this.init(code, input)
    }

    async init(code, input){
        this.browser = await puppeteer.launch()
        this.page = await this.browser.newPage()

        await this.page.goto("https://olimpiada.ic.unicamp.br/saci/cursos/intro_js/1/")

        await this.in(input)

        await this.code(code)

        let out = await this.out()

        await this.page.waitForTimeout(500)

        await this.browser.close()

        return out
    }

    async code(code){
        await this.page.evaluate((code) => {
            _editor.doc.setValue(code)

            setTimeout(() => _codeExecute(), 200)
        }, code)

        await this.page.waitForTimeout(200)
    }

    async in(input){
        await this.page.evaluate(input => document.querySelector("#textareaInput").innerHTML = input, input)
    }

    async out(expect){
        return this.page.$eval('#textareaOutput', el => el.value)
    }

    set browser(_browser){
        this._browser = _browser
    }

    get browser(){
        return this._browser
    }

    set page(_page){
        this._page = _page
    }

    get page(){
        return this._page
    }
}

module.exports = Browser