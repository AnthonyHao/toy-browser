const EOF = Symbol('EOF')

function data(c) { }

module.exports.parseHTML = function parser(html) {
    const state = data
    for (let i of html) {
        state = state(c)
    }
    state = state(EOF)
}