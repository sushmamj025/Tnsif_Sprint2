
import './App.css'
import ListStore from './components/ListStore'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StoreComponent from './components/StoreComponent'

function App() {
  return (
    <>
         <BrowserRouter>
          <Routes>
            <Route path='/'element={<ListStore/>}></Route>
            <Route path='/stores'element={<ListStore/>}></Route>
            <Route path='/add-store'element={<StoreComponent/>}></Route>
          </Routes>
        

         </BrowserRouter>
        
    </>
    
  )
}

export default App
