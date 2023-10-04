import {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One punch '])
    // console.log(categories)
    const onAdd =(NewCategory)=>{
      if(categories.includes(NewCategory)) return
      // categories.push(NewCategory)
      console.log(NewCategory)
        // con la parte de abajo agregamos una nueva categoria
       setcategories([NewCategory, ...categories ])
    }
  return (
    <>
    <h1>Gifexpert</h1>
    {/* <input type="text" /> */}
    <AddCategory 
    // setcategories={setcategories}
    onNewCategory={(event)=>onAdd(event)}
    currenCategories={categories}  //La forma de comprobar si ya tenemos esa palabra
    // debemos derepasar estas dos opciones
    /> 
    {/* de la forma anterior es como le pasamos el hook a la funcion donde editamos el input */}

    
    
        {
            categories.map((category)=>
                <GifGrid 
                key={category}
                category={category}
                />
            )
        }
    
    {/* <button onClick={onAdd}>Agregar</button> */}
    </>
  )
}
