const generateBtn = document.querySelector(".generateBtn");

function generateQRCode() {
  let website = document.getElementById("website").value;
  if (websiteVerify(website)) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
    document.getElementById("qrcode-container").style.display = "block";
  } else {
    alert("Entrez une url valide svp");
  }
}

generateBtn.addEventListener("click", generateQRCode);

function websiteVerify(website) {
  const reg =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
  return reg.test(website);
}
