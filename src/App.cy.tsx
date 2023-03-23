import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(<App />)
  })

  it('increments the count', () => {
    cy.mount(<App />)
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 1 times')
    cy.getAction('INCREMENT_COUNT').should('have.length', 1)
    cy.getState('counter:1')
  })

  it('decrements the count', () => {
    cy.mount(<App />)
    cy.get('button').contains('-').click();
    cy.get('p').should('contain.text', 'Clicked: -1 times');
    cy.getAction('DECREMENT_COUNTER').should('have.length', 1)
    cy.getState('counter:-1')
  })

  it('updates the store correctly after increasing 5 times', () => {
    cy.mount(<App />)
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 1 times')
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 2 times')
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 3 times')
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 4 times')
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 5 times')
    cy.getAction('INCREMENT_COUNTER').should('have.length', 5)
    cy.getState('counter:5')
  })
})