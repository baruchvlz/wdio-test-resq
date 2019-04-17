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
  });
});
