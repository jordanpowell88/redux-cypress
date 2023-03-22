import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })

  it('increments the count', () => {
    cy.mount(<App />)
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 1 times')
    cy.contains('INCREMENT_COUNTER')
  })
})