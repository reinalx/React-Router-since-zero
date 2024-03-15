import './App.css'
import { Router } from './Router'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { Page404 } from './pages/Page404'
import { Search } from './pages/Search'
import { Route } from './components/Route'

const appRoutes = [
  { 
    path:'/',
    Component: HomePage
  },
  {
    path:'/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: Search
  }
]


function App() {

  

  return (
    <main>
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage}/>
          <Route path='/about' Component={AboutPage}/>
          <Route path='/search/:query' Component={Search}/>
        </Router>
    </main>
  )
}

export default App
