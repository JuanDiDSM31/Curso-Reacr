import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";


export const UseFetchGif = (category) => {
//  primer hook
  const [images, setimages] = useState([])
  const [isLoading, setisloading] = useState(true)
  // //   fin del primer hook
  const getImages=async()=>{
    const newImages=await getGif(category);
    setimages(newImages)
    setisloading(false)
   }
// //   +++++++++++++++++++++++++++++++++
// //   segundo hook
  useEffect(()=>{
    getGif(category)
    getImages();
  },[]) 
//  fin del segundo hook

  return {
    images,
    isLoading
  }
}
