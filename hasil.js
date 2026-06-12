// 1. Ambil semua parameter data dari URL
const urlParams = new URLSearchParams(window.location.search);
const namaPeserta = urlParams.get('nama');
const tglLahir = urlParams.get('tgl');
const nomorPeserta = urlParams.get('nomor');

// 2. Pasang ke elemen HTML masing-masing
if (namaPeserta) {
    document.getElementById('displayNama').textContent = namaPeserta.toUpperCase();
}

if (tglLahir) {
    // Membalik format tanggal dari YYYY-MM-DD jadi DD-MM-YYYY agar rapi
    const dateParts = tglLahir.split("-");
    if(dateParts.length === 3) {
        document.getElementById('displayTgl').textContent = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
    } else {
        document.getElementById('displayTgl').textContent = tglLahir;
    }
}

if (nomorPeserta) {
    document.getElementById('displayNomor').textContent = nomorPeserta;
}