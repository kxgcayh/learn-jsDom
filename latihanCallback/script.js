/* $(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=326d4e7b&s=" + $(".input-keyword").val(),
    success: (results) => {
      // console.log(results);
      const movies = results.Search;
      // console.log(movies);
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=326d4e7b&i=" +
            $(this).data("imdbid"),
          success: (md) => {
            const movieDetail = showMovieDetail(md);
            $(".modal-body").html(movieDetail);
            console.log($(this).data("imdbid"));
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
}); */

// Fetch = mereturn Promise
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=326d4e7b&s=" + inputKeyword.value)
    // Return response to json
    .then((response) => response.json())
    // .then((response) => console.log(response))
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // When click detail button
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      // Get All Detail Button
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          // console.log(this);
          const imdbid = this.dataset.imdbid;
          // console.log(imdbid);
          fetch("http://www.omdbapi.com/?apikey=326d4e7b&i=" + imdbid)
            .then((response) => response.json())
            .then((md) => {
              const movieDetail = showMovieDetail(md);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = movieDetail;
            });
        });
      });
    });
});

function showCards(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(md) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${md.Poster}" alt="" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item">
                    <h4>
                      ${md.Title} (${md.Year})
                    </h4>
                  </li>
                  <li class="list-group-item">
                    <strong>Sutradara: </strong> ${md.Director}
                  </li>
                  <li class="list-group-item">
                    <strong>Actors: </strong> ${md.Actors}
                  </li>
                  <li class="list-group-item">
                    <strong>Writer: </strong> ${md.Writer}
                  </li>
                  <li class="list-group-item">
                    <strong>Plot: </strong> <br> ${md.Plot}
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
}
