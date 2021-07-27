

function confirmation(type) {
    var txt;
    var nama1 = document.getElementById("nama").value;
    if (confirm("Apakah anda yakin membeli?")) {
      txt = "Terima kasih " +nama1+ " telah membeli tiket konser " + type;
    } else {
      txt = "Anda Membatalkan Pembelian";
    }
    alert(txt);
  }
  
