describe('template spec', () => {
  
  it('Crear tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  
  })


it('Marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
  
  })
 
  it('Desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
    cy.get('[data-testid="todo-item-toggle"]').uncheck()
  
  })
 
it('Editar tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("comprar el pan").clear().type("lavar el coche{enter}")
  
  })

it('Borrar tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("comprar el pan{enter}").click(1205, 221)
   // Comando para hacer vivible el botón X pasando el ratón por encima 
  })

   
it('Filtrar tarea', () => {
  cy.visit('https://todomvc.com/examples/react/dist/')
  cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
  cy.get('[data-testid="todo-item-toggle"]').click()
  cy.get('[data-testid="text-input"]').type("lavar el coche{enter}")
  cy.get('[data-testid="text-input"]').type("sacar al perro{enter}")
  cy.get(':nth-child(3) > .view > [data-testid="todo-item-toggle"]').click()
  cy.get('[data-testid="text-input"]').type("ir al médico{enter}")
  cy.get(':nth-child(4) > .view > [data-testid="todo-item-toggle"]').click()
  cy.contains('Active').click()
  cy.get(':nth-child(1) > a').click()
  })


})




