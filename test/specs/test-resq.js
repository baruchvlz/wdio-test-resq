import assert from 'assert'

describe('test resq', function() {
  it('resq$', function () {
    browser.url('https://ahfarmer.github.io/calculator/')

    browser.react$('t', { name: '7' }).click()
    browser.react$('t', { name: 'x' }).click()
    browser.react$('t', { name: '6' }).click()
    browser.react$('t', { name: '=' }).click()

    assert.equal($('.component-display').getText(), 42)
  });

  it('resq$$', function () {
    browser.url('https://ahfarmer.github.io/calculator/')

    const orangeBtns = browser.react$$('t', { orange: true })

    assert.equal(orangeBtns.length, 5)
    assert.equal(orangeBtns.find(e => !e.hasOwnProperty('elementId')), undefined)
  });

  it('react$: returns correct fragment', function() {
    browser.url('http://localhost:3000')

    const frg = browser.react$('MyFragment')

    assert.equal(frg.hasOwnProperty('elementId'), true)
  })

  it('react$$: returns correct fragments', function() {
    browser.url('http://localhost:3000')

    const frg = browser.react$$('MyFragment')

    assert.equal(frg.length, 4)
    assert.equal(frg.find(e => !e.hasOwnProperty('elementId')), undefined)
  })
});
