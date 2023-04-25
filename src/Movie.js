


export function Movie({ mdetail }) {
  return (
    <>

      <div class="card" style={{ width: "18rem" }}>
        <img src={mdetail.poster} class="card-img-top" alt={mdetail.name} />
        <div class="card-body">
          <h5 class="card-title">{mdetail.name}</h5>
          <p class="card-text"> {mdetail.summary} </p>
          <a href="#" class="btn btn-primary">BOOK NOW</a>
        </div>
      </div>

    </>

  );

}
