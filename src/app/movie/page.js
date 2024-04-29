import style from '@/app/styles/common.module.css'
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  const url = process.env.RAPID_KEY;

  const options = {
    method: "GET",
    headers: {
      'X-RapidAPI-Key': '1a108783d7msh7008fb1ffca9b0dp1c9668jsn0662125b43a3',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  },
  };

  const res = await fetch(url, options);
  const result = await res.json();
  //console.log(result);
  const main_result = result.titles;
  //console.log(main_result);
  return (
    <div className={style['outermovie-wrapper']}>
      <h2>Popular - Shows / Movies</h2>
      <div className={style['card-section']}>
       
      {main_result.map((curEl) => {
        return(  <MovieCard key={curEl.id} {...curEl} />)
      })}
    
      </div>
    </div>
  );
};

export default Movie;
