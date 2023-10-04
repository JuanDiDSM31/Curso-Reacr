

export const GifItem = ({titulo, url, id}) => {
    // console.log(titulo, url, id)
  return (
    <div className="card">
        <img src={url} alt={titulo} />
        <p>{titulo}</p>
    </div>
  )
}
