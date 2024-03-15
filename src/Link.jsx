import { BUTTONS, EVENTS } from './const';

export function navigate (href) {
    window.history.pushState({},'', href) //Este objeto permite cambiar la url, pero no recarga la página
                                          //primer elemento es el dato que queremos pasar,
                                          //el segundo lit no hace nada y el tercero es la nueva url
    const navigationEvent = new Event(EVENTS.PUSHSTATE) //creamos un evento
    window.dispatchEvent(navigationEvent) //lo despacha/despliega
  }
  
  export function Link ({ target, to, ...props}) {
    const handleClick = (event) => {
        
        const isMainEfvent = event.button == BUTTONS.PRIMARY // primary click 
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target == undefined || target == '_self'

        if(isMainEfvent && isManageableEvent && !isModifiedEvent){
            event.preventDefault() //Esto evita que haga su comportamiento por defecto
            navigate(to) //navegación con SPA
        }

    }

    return <a onClick={handleClick} href={to} target={target} {...props} ></a> // se renderiza el children por culpa del pattern matching
  }