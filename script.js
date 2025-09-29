let imgBox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrimage");
let qrText = document.getElementById("qrtext");
let generateBtn = document.getElementById("downloadBtn");
function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
      encodeURIComponent(qrText.value);
    imgBox.classList.add("show-img");

    setTimeout(() => {
      downloadBtn.style.display = "block";
    }, 500);
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
downloadBtn.addEventListener("click", function () {
  if (qrImage.src) {
    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});

// Allow Enter key to generate QR code
qrText.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    generateQR();
  }
});
