// 1. Importer le hook useReducer
import { useState, useReducer } from 'react'
// import { createStore } from 'redux';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  const [count, setCount] = useState(0)

    // 2. Définition du contenu du dépôt
    const stateInit = {
        count : 0,
        user: {}
      };

    // 3. Le reducer : 
    // - les données initiales (éventuelles) pour notre new dépôt
    // - le type de l'action 
    const counterReducer = (state = stateInit, action) => {

        switch (action.type) {
          case 'ADD_ONE':
            return { ...state, count: state.count + 1 };

          case 'SUBSTRACT_ONE':
            return { ...state, count: state.count - 1};
          
          default:
            return state
        }
      }

    // 4. Initialiser le reducer avec hook
    const [state, dispatch] = useReducer(counterReducer, stateInit);

    // Définition du store
    //const store = createStore(messageReducer);

    // Exécution d'une action donnée
    //store.dispatch({type : 'ADD_MESSAGE', message : "Hello world 1 !"});

    // 5. Définition des fonctions de rappel liées au déclenchement de l'événement 
    const handleAdd () {
      //  setCount(count + 1);
      dispatch({'type': 'ADD_ONE'});
    

    const handelSub() {
      //  setCount(count - 1);
      dispatch({'type': 'SUBSTRACT_ONE'});
    }

    return (
    <>
      <div>
            // 6. Affichage d'une variabe du dépôt
            <p>{state.count}</p>
            // 7. Définition des événements
           <button onClick={handleAdd}>Ajouter 1</button>
           <button onClick={handleSub}>Retrancher 1</button>
      </div>
    </>
  )
}

export default App