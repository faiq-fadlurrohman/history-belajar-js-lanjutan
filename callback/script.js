// callback

// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt("Masukan Nama: ");
//     callback(nama);
// }

// tampilkanPesan(halo);
// tampilkanPesan(nama => alert(`Nama, ${nama}`));

// const cus = [
//     {
//         "nama": "Beckham",
//         "email": "beckham@beras3n.online",
//         "alamat": "Awirarangan",
//         "idAdmin": 1
//     },
//     {
//         "nama": "Rizky",
//         "email": "rizky@beras3n.online",
//         "alamat": "Cidahu",
//         "idAdmin": 1
//     },
//     {
//         "nama": "Taufik",
//         "email": "taufik@beras3n.online",
//         "alamat": "Sindangagung",
//         "idAdmin": 2
//     }
// ];

// console.log("mulai");
// cus.forEach(c =>{
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(c.nama);
// });
// console.log("selesai");

// Asynchronous Callback
function getDataCusotmer(url, success, error) {
    let a = new XMLHttpRequest();

    a.onreadystatechange = function() {
        if (a.readyState === 4) {
            if (a.status === 200) {
                success(a.response);
            } else if (a.status === 404) {
                error();
            }
        }
    }

    a.open("get", url);
    a.send();
}

console.log("start");
getDataCusotmer("data/customer.json", results => {
    console.log(JSON.parse(results));
}, () => {

});
console.log("finish");