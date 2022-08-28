// function onScanSuccess(decodedText, decodedResult) {
//     // handle the scanned code as you like, for example:
//     console.log('Code matched = ${decodedText}', decodedResult);
// }

// function onScanFailure(error) {
//     console.warn('Code scan error = ${error}');
// }

// let html5QrcodeScanner = new Html5QrcodeScanner("reader",{ fps: 10, qrbox: {width: 250, height: 250} },/* verbose= */ false);
// html5QrcodeScanner.render(onScanSuccess, onScanFailure);
const scanBtn = document.getElementById("qrscan");
const dnNo = document.getElementById("dnNo");


const html5QrCode = new Html5Qrcode("reader");

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    dnNo.value = decodedText
};
const config = { fps: 10, qrbox: { width: 250, height: 250 } };

scanBtn.addEventListener("click", () => {
    html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
});