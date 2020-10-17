/* events */
function Function1() {
  var dots = document.getElementById("titik1");
  var moreText = document.getElementById("moreevent1");
  var btnText = document.getElementById("more1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function2() {
  var dots = document.getElementById("titik2");
  var moreText = document.getElementById("moreevent2");
  var btnText = document.getElementById("more2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function3() {
  var dots = document.getElementById("titik3");
  var moreText = document.getElementById("moreevent3");
  var btnText = document.getElementById("more3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function4() {
  var dots = document.getElementById("titik4");
  var moreText = document.getElementById("moreevent4");
  var btnText = document.getElementById("more4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function5() {
  var dots = document.getElementById("titik5");
  var moreText = document.getElementById("moreevent5");
  var btnText = document.getElementById("more5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function6() {
  var dots = document.getElementById("titik6");
  var moreText = document.getElementById("moreevent6");
  var btnText = document.getElementById("more6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function7() {
  var dots = document.getElementById("titik7");
  var moreText = document.getElementById("moreevent7");
  var btnText = document.getElementById("more7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function8() {
  var dots = document.getElementById("titik8");
  var moreText = document.getElementById("moreevent8");
  var btnText = document.getElementById("more8");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function9() {
  var dots = document.getElementById("titik9");
  var moreText = document.getElementById("moreevent9");
  var btnText = document.getElementById("more9");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

function Function10() {
  var dots = document.getElementById("titik10");
  var moreText = document.getElementById("moreevent10");
  var btnText = document.getElementById("more10");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See Less";
    moreText.style.display = "inline";
  }
}

/* contactus */
function sendButton() {
  var fullname = document.getElementById('fname').value;
  var surat = document.getElementById('pesan').value;

  if (fullname == "") {
    alert ("Silahkan Masukan Nama Anda.");
  }else if (surat == ""){
    alert ("Silahkan Masukan Pesan Anda.");
  } else {
    alert ("Selamat " + fullname + " Pesan Anda Telah Terkirim" + "\n Pesan ada akan segera di proses.")
  }
}

/* registration */
function sendButton1(){
  fullname       = document.getElementById('fname').value;
  callname       = document.getElementById('cname').value;
  nim            = document.getElementById('nimnumber').value;
  prodi          = document.getElementById('prodi').value
  tempatlahir    = document.getElementById('tlahir').value;
  tanggallahir   = document.getElementById('tgllhr').value;
  email          = document.getElementById('email').value;
  nomorhp        = document.getElementById('nohp').value;
  check          = document.getElementsByName('checklist').checked;
  var benar;

  if (fullname == "") {
    alert ("Silahakan Isi Nama Lengkap Anda.");
  } else if (callname == "") {
    alert ("Silahkan Isi Nama Panggilan Anda.");
  } else if (nim == "") {
    alert("Silahkan Isi NIM Anda.");
  } else if (prodi == "") {
    alert ("Silahkan Isi Program Studi Anda.");
  } else if (tempatlahir == "") {
    alert ("Silahkan Isi Tempat Lahir Anda.");
  } else if (tanggallahir == "") {
    alert ("Silahkan Masukan Tanggal Lahir Anda.");
  } else if (email == "") {
    alert ("Silahkan Isi Email Anda.");
  } else if (nomorhp == "") {
    alert ("Silahkan Masukan nomor WA Anda.");
  } else if (check == false){
    alert ("Silahkan untuk menyetujui persyaratan dan peraturan.");
  } else {
      benar = confirm ("Apakah data diri dibawah ini sudah benar: " + "\n Full Name              : " + fullname + "\n Nama Panggilan    : " +
      callname + "\n NIM                        : " + nim + "\n Progam Studi         : " + prodi + "\n Tempat Lahir          : " + tempatlahir +
      "\n Tanggal Lahir         :  " + tanggallahir + "\n E-mail                    : " + email +
      "\n Nomor HP             : " + nomorhp);
      if (benar == true) {
        alert ("Selamat " + fullname + " telah mendaftar UKM Renang Universitas Ma Chung" + "\n Selanjutnya akan dihubungi melalui WhatsApp");
      }
  }
}
