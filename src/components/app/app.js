import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import React from 'react';
import Modal from '../modal/modal';
import {Button } from '@ya.praktikum/react-developer-burger-ui-components';
const api = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
   const [ingredients, setIngredients]= React.useState([]);
   const[burger, setBurger] = React.useState([]);
   const[error,setError] = React.useState('');
   const[tryAgain,setTrayAgain] = React.useState(true);
   React.useEffect(
     ()=>{
      const fetchData = async () => {
         setError('');
         await fetch(api)
         .then(res=>res.json())
         .then(data=>{
            if(data.success) setIngredients(data.data)
            else throw new Error("Нет данных")
         })
         .catch(e=>setError(e))
         
      }    
      if(tryAgain){fetchData();setTrayAgain(false);}
      },[tryAgain]
   );
   React.useEffect(
     ()=>{
        setBurger([
         {
             "_id":"60666c42cc7b410027a1a9b1",
             "type": "top",
             "isLocked":true,
             "text":"Краторная булка N-200i",
             "price":200,
             "thumbnail":"https://code.s3.yandex.net/react/code/bun-02.png"
     },
     
     {
         "_id":"60666c42cc7b410027a1a9b3",
         "type": "undefined",
         "isLocked":false,            
         "text":"Филе Люминесцентного тетраодонтимформа",
         "price":988,
         "thumbnail":"https://code.s3.yandex.net/react/code/meat-03.png",
      },
     {
         "_id":"60666c42cc7b410027a1a9b5",
         "type": "undefined",
         "isLocked":false,
         "text":"Говяжий метеорит (отбивная)",
         "price":3000,
         "thumbnail":"https://code.s3.yandex.net/react/code/meat-04.png"
     },  
     {
        "_id":"60666c42cc7b410027a1a9b3",
        "type": "undefined",
        "isLocked":false,            
        "text":"Филе Люминесцентного тетраодонтимформа",
        "price":988,
        "thumbnail":"https://code.s3.yandex.net/react/code/meat-03.png",
     },
     {
        "_id":"60666c42cc7b410027a1a9bf",
        "type": "undefined",
         "isLocked":false,
        "text":"Сыр с астероидной плесенью",
        "price":4142,
        "thumbnail":"https://code.s3.yandex.net/react/code/cheese.png",
     },
     {
         "_id":"60666c42cc7b410027a1a9b1",
         "type": "bottom",
         "isLocked":true,
         "text":"Краторная булка N-200i",
         "price":200,
         "thumbnail":"https://code.s3.yandex.net/react/code/bun-02.png"
   }
     ])
     },[]
   )
   return (
    <>
      <header><AppHeader></AppHeader></header>
           
      <main className={styles.main}>
       <section className={styles.section}><BurgerIngredients ingredients={ingredients}/></section>
       <div className='ml-10'/>
       <div id='react-modals' className={styles.modal}></div> 
       <section className={`mt-25 ${styles.section}`}><BurgerConstructor burger={burger}/></section> 
       {error&&<Modal header='Печалька :(' onClose={()=>setError('')}>
          <span className='text text_type_main-medium'>{`"${error}"`}</span>
          <Button onClick={()=>setTrayAgain(true)} >Попробовать снова</Button>
          </Modal>}
      </main>
      
    </>
   );
}
export default App;
