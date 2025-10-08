import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router';
import Navigation from './components/Navigation'
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import NotFound from './pages/NotFound'
import PizzaDettaglio from './pages/PizzaDettaglio'
import ListaPizze from './pages/ListaPizze'


function App() {

  return (
    <>
        <BrowserRouter>
        
          <div id="app">

              {/* Chiudi navigazione */}
              <Navigation/>

              <Routes>
                {/* All'interno di questo tag andiamo a definire rotte e relativi componenti.  */}
                <Route path='/' element={<Home/>}/>
                <Route path='/chi-siamo' element={<ChiSiamo/>}/>
                <Route path='/pizze' element={<ListaPizze/>}/>
                <Route path='/pizze/:id' element={<PizzaDettaglio/>}/>
                <Route path='*' element={<NotFound/>}/>

              </Routes>

          </div>

        </BrowserRouter>
    </>
  )
}

export default App
