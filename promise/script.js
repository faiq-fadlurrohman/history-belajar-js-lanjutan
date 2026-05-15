// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=3628ca2c&s=avengers",
//     success: m => console.log(m)
// });

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.response));
//         } else if (xhr.status === 404) {
//             console.log(xhr.responseText);
//         }
//     }
// }

// xhr.open("get", "http://www.omdbapi.com/?apikey=3628ca2c&s=avengers");
// xhr.send();

// fetch("http://www.omdbapi.com/?apikey=3628ca2c&s=avengers")
//     .then(response => response.json())
//     .then(response => console.log(response));