// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import React from 'react';
import './commands'
import configureStore from '../../src/store/configureStore'
import CounterApp from '../../src/containers/CounterApp';
import DevTools from '../../src/components/DevTools';
import '../../src/index.css'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount, MountOptions } from 'cypress/react18'
import { ReactNode } from 'react'
import { Provider } from 'react-redux';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      getAction: (action: string) => Chainable
      getState: (state: string) => Chainable;
    }
  }
}

Cypress.Commands.add('getAction', (action) => {
  return cy.get('[style*="padding-top: 8px; padding-bottom: 7px; padding-left: 16px;"]').filter(`:contains(${action})`)
})

Cypress.Commands.add('getState', (state) => {
  return cy.get('li [style*="padding-top: 0.25em; padding-right: 0px; margin-left: 0.875em; user-select: text; overflow-wrap: break-word; padding-left: 2.125em; text-indent: -0.5em; word-break: break-all"]').filter(`:contains(${state})`)
})

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

// Example use:
// cy.mount(<MyComponent />)