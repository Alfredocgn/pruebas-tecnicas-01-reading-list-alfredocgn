/* eslint-disable react/prop-types */


export const GenreList = ({genres,setSelectedGenre}) => {
  return (
    <>
    <select name="genreList" id="genreList" onChange={(e)=> 
      setSelectedGenre(e.target.value)}>
      <option value="">Todos</option>
      {genres.map((genre)=>(
        <option key={genre} value={genre}>{genre}</option>
      ))}
    </select>
    </>
  )
}
