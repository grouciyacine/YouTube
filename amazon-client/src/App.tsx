import './App.css';
import Home from './screen/Home';
import{Route,Routes,BrowserRouter, Navigate} from 'react-router-dom'
import List from './screen/List';
import Product from './screen/Product';
import Auth from './screen/Auth';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ViewList from './screen/ViewList';
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Navigate to="/home" />}/>
    <Route path='/'>
      <Route path='Home' element={<Home/>} />
      <Route path='List/:title' element={<List/>}/>
      <Route path='Product/:name/:title' element={<Product/>}/>
      <Route path='Auth' element={<Auth/>}/>
      <Route path='OneList/:id' element={<ViewList/>}/>
    </Route>
  </Routes>
</BrowserRouter>
    </div>
    </QueryClientProvider>

  );
}

export default App;
