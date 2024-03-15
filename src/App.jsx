import './App.css'
import { Router } from './Router'
import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { Page404 } from './pages/Page404'
import { Search } from './pages/Search'

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
        <Router routes={appRoutes} defaultComponent={Page404}/>
    </main>
  )
}

export default App
