$.ajax({
    url: "http://www.omdbapi.com/?apikey=3628ca2c&s=avengers",
    success: results => {
        const movies = results.Search;
        let cards = '';
        movies.forEach(m => {
            cards += showCards(m);
        });
        $(".movie-container").html(cards);

        // Ketika tombol detail diklik
        $(".modal-detail-button").on("click", function() {
            $.ajax({
                url: "http://www.omdbapi.com/?apikey=3628ca2c&i=" + $(this).data("imdbid"),
                success: md => {
                    const movieDetail = showMovieDetail(md);
                    $(".modal-body").html(movieDetail);
                },
                error: (e) => {
                    console.log(e.responseText);
                }
            })
        });
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

function showCards(m) {
    return `
        <div class="col-md-4 my-3">
            <div class="card">
                <img src="${m.Poster}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
            </div>
        </div>
    `;
}

function showMovieDetail(md) {
    return `
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <img src="${md.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item"><h4>${md.Title} (${md.Year})</h4></li>
                    <li class="list-group-item"><strong>Director: </strong>${md.Director}</li>
                    <li class="list-group-item"><strong>Actors: </strong>${md.Actors}</li>
                    <li class="list-group-item"><strong>Writer: </strong>${md.Writer}</li>
                    <li class="list-group-item"><strong>Plot: </strong><br>${md.Plot}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}