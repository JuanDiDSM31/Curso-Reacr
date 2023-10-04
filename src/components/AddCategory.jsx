import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inpulvalue, setinpulvalue] = useState('')
    // recordemos que input value es lo que recibe el parametro de useState
    const add=({target})=>{
        setinpulvalue(target.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(inpulvalue.trim().length<=1) return;
        
        // console.log(inpulvalue)
        // setcategories(categories=>[...categories,inpulvalue])
        onNewCategory(inpulvalue.trim())
        setinpulvalue('');
    }
  return (

<form onSubmit={(e)=>onSubmit(e)}>
<input 
type="text"
placeholder="Buscar un gif"
value={inpulvalue} //esto es lo que se escribira en el navegador
onChange={add} //Este es el nuevo parametro que se le pasa al hook de igual manera al refrescar se quedara todo con normalidad
/>
</form>
  )
}
