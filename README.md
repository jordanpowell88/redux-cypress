# redux-cypress

An example React app showing how you can use Cypress Component Testing and the Redux DevTools to validate the state and dispatched actions in your application.



## Example
https://user-images.githubusercontent.com/3605268/227187496-e21a188f-ecd8-4d79-b48d-1bf30743a0ca.mov


## Usage

**Updating Mount**
```ts
// cypress/support/component.tsx
import { Provider } from 'react-redux';
import configureStore from '../../src/store/configureStore';
import CounterApp from '../../src/containers/CounterApp';
import DevTools from '../../src/components/DevTools';

Cypress.Commands.add('mount', (jsx: ReactNode, options?: MountOptions, rerenderKey?: string) => {
  const store = configureStore()
  
  const wrapped = <Provider store={store}>
    <>
      <CounterApp>
        {jsx}
      </CounterApp>
      <DevTools />
    </>
  </Provider>
  
  return mount(
    wrapped,
    options,
    rerenderKey)
})
```

**Add Action & State Selectors**
```ts
Cypress.Commands.add('getAction', (action) => {
  return cy.get('[style*="padding-top: 8px; padding-bottom: 7px; padding-left: 16px;"]').filter(`:contains(${action})`)
})

Cypress.Commands.add('getState', (state) => {
  return cy.get('li [style*="padding-top: 0.25em; padding-right: 0px; margin-left: 0.875em; user-select: text; overflow-wrap: break-word; padding-left: 2.125em; text-indent: -0.5em; word-break: break-all"]').filter(`:contains(${state})`)
})
```


## Writing Tests
Writing tests is now simlple as you just call `cy.mount` and then use the `cy.getAction()` and `cy.getState()` commands to run assertions in the [Redux DevTools](https://github.com/reduxjs/redux-devtools) Panel.

```ts
it('increments the count', () => {
    cy.mount(<App />)
    cy.get('button').contains('+').click()
    cy.get('p').should('contain.text', 'Clicked: 1 times')
    cy.getAction('INCREMENT_COUNT').should('have.length', 1)
    cy.getState('counter:1')
  })
```
