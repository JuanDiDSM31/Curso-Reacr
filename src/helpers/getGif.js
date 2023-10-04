export const  getGif =async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=ehxcHzjFJw0Og8I3kM0vTuT3GXwb6op7&q=${category}&limit=10`;
    const resp=await fetch(url)
    const {data}=await resp.json();
    const giif=data.map(img=>({
      id:img.id,
      titulo:img.title,
      url:img.images.downsized_medium.url
       
      
    }));

    // console.log(giif);
    return giif;
   

}