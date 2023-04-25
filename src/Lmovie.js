import { MOVIEDATA } from './App';
import { Movie } from "./Movie";

export function Lmovie() {
  const listmovie = MOVIEDATA;

  return (

    <>
      <h4>Movie</h4>
      <button>NOW SHOWING</button>
      <div className='lmovie'>

        {listmovie.map((ml) => (

          <Movie mdetail={ml} />

        ))}

      </div>

    </>

  );
}
