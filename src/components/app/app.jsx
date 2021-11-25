import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import React from 'react';
import Modal from '../modal/modal';
import {INGREDIENTS_URL} from '../../utils/burger-constants';
import { ErrorContext, IngredientsContext, OrderContext } from '../../utils/appContext';
import { OrderReducer } from '../../utils/order-reducer';
const orderInitialState = {burger:[],price:0, orderId:null, orderName:''};
function App() {
   const [ ingredients, setIngredients]= React.useState([]);
   const [ order, orderDispatcher] = React.useReducer(OrderReducer, orderInitialState);
   const [ error, setError] = React.useState(null);
   React.useEffect(
     ()=>{        
      const fetchData = async () => { 
         try{        
            const result = await fetch(INGREDIENTS_URL)
            const resultObj = await result.json();
            if(!resultObj.success) throw new Error("Нет данных")
            setIngredients(resultObj.data);           
         }
         catch(e){setError(e)}
      }    
      fetchData();
      },[]
   );
   //это временно для первичного заполнения
   React.useEffect(
     ()=>{
      if(ingredients.length>3) {
         orderDispatcher({type:"add", item:ingredients[8],place:1} );
         orderDispatcher({type:"add", item:ingredients[2],place:2} );
         orderDispatcher({type:"add", item:ingredients[1],place:3} );
         orderDispatcher({type:"add", item:ingredients[0],place:3} );
         orderDispatcher({type:"add", item:ingredients[7],place:3} );
      }
     },[ingredients]
   )
   return (
    <>
      <header><AppHeader></AppHeader></header>
      <IngredientsContext.Provider value={{ingredients, setIngredients}}>
      <OrderContext.Provider value={{order, orderDispatcher}}>
         <ErrorContext.Provider value={{error, setError}}>
      <main className={styles.main}>
       <section className={styles.section}><BurgerIngredients /></section>
       <div className="ml-10"/>
       <div id="react-modals" className={styles.modal}></div> 
       <section className={`mt-25 ${styles.section}`}><BurgerConstructor /></section> 
       {error&&<Modal header="Печалька :(" onClose={()=>setError(null)}>
          <span className="text text_type_main-medium">{`"${error}"`}</span>
          </Modal>}
      </main>
      </ErrorContext.Provider>
      </OrderContext.Provider>
      </IngredientsContext.Provider>
      
      
    </>
   );
}
export default App;
