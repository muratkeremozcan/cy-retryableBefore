import { retryableBefore } from '../../src/retryable-before'

describe('retryableBefore', () => {
  let beforeCounter = 0

  retryableBefore(() => {
    beforeCounter++
  })

  it('test 1', () => {
    expect(beforeCounter).to.be.at.least(2)
    cy.log('the test should fail initially and pass on retry')
  })

  it('test 2', () => {
    expect(beforeCounter).to.eq(2)
    cy.log('should pass')
  })
})
