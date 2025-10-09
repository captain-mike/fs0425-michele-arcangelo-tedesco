import { BrowserRouter, Routes, Route } from 'react-router'
import  Home from './pages/Home'
import  Pizzas from './pages/Pizzas'
import  Users from './pages/Users'
import  UserSearch from './pages/UserSearch'
import  UserTable from './pages/UserTable'
import  Navigation from './components/Navigation'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pizzas' element={<Pizzas />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user-search' element={<UserSearch />} />
        <Route path='/user-table' element={<UserTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
