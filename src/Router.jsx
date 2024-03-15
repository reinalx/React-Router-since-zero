import { EVENTS } from './const'
import { useState, useEffect } from 'react'
import {match} from 'path-to-regexp'

export function Router ({routes = [], defaultComponent: DefaultComponent = () => null }){

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
  
    useEffect(() =>{
      const onLocationChange = () =>{
        setCurrentPath(window.location.pathname)
      }
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange ) //Creamos el evento, de manera que cada vez que se ejecute, ejecuta la función asignada
      window.addEventListener(EVENTS.POPSTATE, onLocationChange) //Es el evento que el navegador usar cuando vas hacia atras
      //windows.history.back() tambien tira para atras
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange) //Es el evento que el navegador usar cuando vas hacia atras
  
      }
    }, [])
  
    let routeParams = {}

    const Page = routes.find(({ path}) =>{
        if(path == currentPath) return true
        

        // hemos usado path-to-regex
        // para poder detectar rutas dinamicas
        const matcherUrl = match(path, {decode: decodeURIComponent}) //decodifica elpath de manera que pueda entender la app
        const matched = matcherUrl(currentPath)
        if(!matched) return false

        routeParams = matched.params // {query: 'javascript} // /search/javascript
        return true
    })?.Component

    return Page ? <Page routeParams={routeParams} /> 
    : <DefaultComponent routeParams={routeParams} />
  }
  