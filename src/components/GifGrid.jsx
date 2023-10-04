import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";
import { GifItem } from "./GifItem";
import { UseFetchGif } from "../hooks/UseFetchGif";



export const GifGrid = ({category}) => {
  const {images, isLoading}=UseFetchGif(category);
  console.log({ isLoading})

  
//++++++++++++++++++++++++++++++++
// inicio del return para mostrat
  return (
    <>
    <h3>{category}</h3>
    {
      isLoading &&(<h2>Cargando...</h2>)
    }
    {/* <p>Hola mundo</p> */}
    
     <div className="card-grid">
       {//recordemos que las llaves son para meter codigo de java script
      images.map((image)=>(
      <GifItem
       key={image.id}
      {...image}
      />
      ))
         
        
        }
     </div>
     
    

    </>
    
  )
}
