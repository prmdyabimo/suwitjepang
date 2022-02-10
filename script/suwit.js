
// untuk mendapatkan angka random pada computer
function getPilihanComputer() {
	const comp = Math.random();
	if (comp < 0.34) return 'gunting'; 
	if (comp >= 0.34 && comp < 0.64) return 'batu'; 
	return 'kertas';
}

// rules
// untuk mendapatkan siapa pemenang
function getHasil(comp, player) {
	if (player == comp) return 'SERI';
	if (player == "gunting") return (comp == "kertas") ? 'MENANG' : 'KALAH';
	if (player == "kertas") return (comp == "gunting") ? 'KALAH' : 'MENANG';
	if (player == "batu") return (comp == "kertas") ? 'KALAH' : 'MENANG';
}

// function untuk agar gambar computer memilik efek animasi
function randomImg() {
	const imgComputer = document.querySelector(".img-komputer");
	const gambar = ['gunting', 'batu', 'kertas']
	// menggunakan let karena berubah2 isinya
	let i = 0;
	// waktu mulai, new Date() dan getTime() untuk mendapatkan waktu saat itu
	const waktuMulai = new Date().getTime();

	// setInterval adalah fungsi untuk melakukan sesuatu secara berulang2 selama waktu tertentu
	setInterval(function () {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return; // agar program berhenti
		};
		// agar gambar berputar berulang2
		imgComputer.setAttribute("src", 'img/' + gambar[i++] + '.png');
		if (i == gambar.length) {
			i = 0;
		}
	}, 100 ) // waktu interval 100 = 0.1 detik
}


// cara lebih ringkas
// mengambil semua img yang ada di li
const pilihan = document.querySelectorAll("li img");
// menggunakan forEach untuk mengambil gambar yang diklik saja
pilihan.forEach(function (pil) {
	pil.addEventListener("click", function () {
			const pilihanComputer = getPilihanComputer();
			const pilihanPlayer = pil.className; // mengambil nama classnya
			const hasil = getHasil(pilihanComputer, pilihanPlayer);

			// memanggil function putar
			randomImg();
		
			// untuk menunggu selama 1 detik agar tidak muncul duluan
			// apabila gambar belum berhenti berputar maka hasil tidak akan keluar begitu juga sebaliknya
			setTimeout(function () {
				// merubah gambar computer
				const imgComputer = document.querySelector(".img-komputer");
				// mengubah sesuai pilihan computer
				imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
	
				// menambahkan tulisan di class info
				const info = document.querySelector(".info");
				info.innerHTML = hasil;
			}, 1000);  // selama 1 detik
		

			// pengecekan apakah berjalan atau tidak
			// console.info(pilihanComputer);
			// console.info(pilihanPlayer);
			// console.info(hasil);
	})
})


// EVENT
// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", function () {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGunting.className; // mengambil nama classnya
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	// merubah gambar computer
// 	const imgComputer = document.querySelector(".img-komputer");
// 	// mengubah sesuai pilihan computer
// 	imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

// 	// menambahkan tulisan di class info
// 	const info = document.querySelector(".info");
// 	info.innerHTML = hasil;

// 	// pengecekan apakah berjalan atau tidak
// 	// console.info(pilihanComputer);
// 	// console.info(pilihanPlayer);
// 	// console.info(hasil);
// });

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", function () {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pBatu.className; // mengambil nama classnya
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	// merubah gambar computer
// 	const imgComputer = document.querySelector(".img-komputer");
// 	// mengubah sesuai pilihan computer
// 	imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

// 	// menambahkan tulisan di class info
// 	const info = document.querySelector(".info");
// 	info.innerHTML = hasil;

// 	// pengecekan apakah berjalan atau tidak
// 	// console.info(pilihanComputer);
// 	// console.info(pilihanPlayer);
// 	// console.info(hasil);
// });

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pKertas.className; // mengambil nama classnya
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);

// 	// merubah gambar computer
// 	const imgComputer = document.querySelector(".img-komputer");
// 	// mengubah sesuai pilihan computer
// 	imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

// 	// menambahkan tulisan di class info
// 	const info = document.querySelector(".info");
// 	info.innerHTML = hasil;

// 	// pengecekan apakah berjalan atau tidak
// 	// console.info(pilihanComputer);
// 	// console.info(pilihanPlayer);
// 	// console.info(hasil);
// });