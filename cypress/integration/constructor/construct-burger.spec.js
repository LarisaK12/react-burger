describe('app works correctly with ingredients', function() {
    before(function() {
      cy.visit('http://localhost:3000/react-burger');
    });
  
    it('should open constructor page by default', function() {
      cy.contains('Соберите бургер');
    });
    it('should load ingredients', function() {
        cy.contains('Краторная булка');
        cy.get('#ingredient').should('exist');
      });   
    
    it('should open ingredient details', function() {
        cy.get("#ingredient").click();
        cy.contains('Детали ингредиента');
        cy.get('#modalOverlay').should('exist');

    });
     it('should close ingredient details', function() {
        cy.get('#modalOverlay').click('topLeft');
        cy.get('#modalOverlay').should('not.exist');       

     });
     it('should drag ingredient to constructor', function() {
        cy.get("#ingredient").trigger('dragstart');
        cy.get("#burger-constructor").trigger('drop');
    });
    
    it('should create order', function() {
        cy.get("button").contains("Оформить заказ").click();      

    });
    it('should login if need to', function() {
        cy.get('button').then(($btn) => {
            if ($btn.text().includes('Войти')) {
                cy.get('#email > .input__container > .input > .input__icon > svg').click();
                cy.get('#email > .input__container > .input').type("miron@a.ru");
                cy.get('#password > .input__container > .input').type("q1w2e3r4");
                cy.get('button').click();      
            
            } 
          }).then(()=>{
              // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(1000);
            cy.get("button").contains("Оформить заказ").click();      
                
              });    
          
          
    });
    it('should see order details after 15 sec', function() {
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(16000);
        cy.get('#modalOverlay').contains("ваш заказ начали готовить").should('exist');       

     });
     it('should close order details', function() {
        cy.get('#closeButton').click();
        cy.get('#modalOverlay').should('not.exist');       

     });
     
  });