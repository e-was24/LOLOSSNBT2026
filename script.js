const snbtForm = document.getElementById('snbtForm');
const inputName = document.getElementById('inputName');
const inputDob = document.getElementById('inputDob'); // <-- 1. Ambil elemen input TTL

snbtForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const username = inputName.value;
    const dob = inputDob.value; // <-- 2. Ambil nilai tanggal lahir (format: YYYY-MM-DD)
    
    // Rumus memunculkan angka 12 digit acak bulat (antara 100000000000 sampai 999999999999)
    const randomNomorPeserta = Math.floor(100000000000 + Math.random() * 900000000000);
    
    // 3. Kirim nama, nomor acak, DAN tanggal lahir (&tgl=...) ke halaman hasil.html
    window.location.href = `hasil.html?nama=${encodeURIComponent(username)}&nomor=${randomNomorPeserta}&tgl=${encodeURIComponent(dob)}`;
});