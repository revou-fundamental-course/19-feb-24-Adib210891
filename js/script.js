

function validasiForm(event) {
    event.preventDefault();
  
    var nama = document.getElementById('nama').value;
    var tinggi = document.getElementById('tinggi').value;
    
  
    if(nama == "") {
      alert("Nama tidak boleh kosong");
      return false;
    }
  
    if(tinggi == "") {
      alert("Tinggi tidak boleh kosong");
      return false;
    }
    return true;
  }