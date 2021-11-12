import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
function App() {
  return (
    <>
      <header><AppHeader></AppHeader></header>
      <main>
       <section><BurgerIngredients/></section>
       <section className="mt-25 ml-10"><BurgerConstructor/></section>       
      </main>
      
    </>
  );
}

export default App;
