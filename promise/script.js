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

// Promise
// Contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve("Janji telah ditepati.");
//     } else {
//         reject("Ingkar janji...");
//     }
// });

// janji1
//     .then(response => console.log("OK : " + response))
//     .catch(response => console.log("NOT OK : " + response));

// Contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve("Ditepati setelah beberapa waktu.");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject("Tidak ditepati setelah beberapa waktu.");
//         }, 2000)
//     }
// });

// console.log("start");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log("Selesai menunggu."))
//     .then(response => console.log("OK : " + response))
//     .catch(response => console.log("NOT OK : " + response));
// console.log("finish");

// Contoh penggunaan Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: "Blitz Curler",
            sutradara: "Ujang",
            pemeran: "Rizky, Taufik"
        }])
    }, 2000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: "Bandung",
            temperatur: 28,
            kondisi: "Cerah"
        }]);
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });