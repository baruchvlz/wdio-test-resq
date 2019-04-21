import assert from 'assert'

describe('browser react selector', function() {
  describe('react$', function() {
    it('works', function () {
      browser.url('https://ahfarmer.github.io/calculator/')
  
      browser.react$('t', { name: '7' }).click()
      browser.react$('t', { name: 'x' }).click()
      browser.react$('t', { name: '6' }).click()
      browser.react$('t', { name: '=' }).click()
  
      assert.equal($('.component-display').getText(), 42)
    })

    it('returns correct fragment', function() {
      browser.url('http://localhost:3000')
  
      const frg = browser.react$('MyFragment')
  
      assert.equal(frg.hasOwnProperty('elementId'), true)
    })
  
    it('returns correct state filtered components', function() {
      browser.url('http://localhost:3000')
  
      assert.equal(browser.react$('MyButton', {}, { foo: 'Here' }).getText(), 'Click Me Here')
    })
  
    it('works with nonobject states', function() {
      browser.url('http://localhost:3000')
  
      assert.equal(browser.react$('MyDiv', undefined, 'Hello World').getText(), 'Hello World')
    })
  })
  
  describe('react$$', function() {
    it('works', function () {
      browser.url('https://ahfarmer.github.io/calculator/')
  
      const orangeBtns = browser.react$$('t', { orange: true })
  
      assert.equal(orangeBtns.length, 5)
      assert.equal(orangeBtns.find(e => !e.hasOwnProperty('elementId')), undefined)
    })
  
    it('returns correct fragments', function() {
      browser.url('http://localhost:3000')
  
      const frg = browser.react$$('MyFragment')
  
      assert.equal(frg.length, 4)
      assert.equal(frg.find(e => !e.hasOwnProperty('elementId')), undefined)
    })
  
    it('returns correct state filtered components', function() {
      browser.url('http://localhost:3000')
  
      const frg = browser.react$$('MyButton', {}, { foo: 'Here' })
  
      assert.equal(frg.length, 2)
      assert.equal(frg.find(e => !e.hasOwnProperty('elementId')), undefined)
    })
  
    it('works with nonobject states', function() {
      browser.url('http://localhost:3000')
  
      assert.equal(browser.react$$('MyDiv', {}, 'Hola Mundo').length, 1)
    })
  })
})
