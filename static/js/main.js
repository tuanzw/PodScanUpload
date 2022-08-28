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
const selctBtn = document.getElementById("select");
const uploadBtn = document.getElementById("upload");
const clearBtn = document.getElementById("clear");
const fileinput = document.getElementById("formFile");
const dnNo = document.getElementById("dnNo");

const toogleScan = 1;

const html5QrCode = new Html5Qrcode("reader");

const qrCodeSuccessCallback = (decodedText, decodedResult) => {
    dnNo.value = decodedText;
};
function qrcodeClose(){
    html5QrCode.stop().then((ignore) => {
        // QR Code scanning is stopped.
    }).catch((err) => {
        // Stop failed, handle it.
    });
}

const config = { fps: 10, qrbox: { width: 250, height: 250 } };

scanBtn.addEventListener("click", () => {
    html5QrCode.start({ facingMode: { exact: "environment"} }, config, qrCodeSuccessCallback);
    toogleScan = 0;
});

selctBtn.addEventListener("click", () => {
    if (dnNo.value !=  ""){
        qrcodeClose();
        fileinput.click();
    }
});

fileinput.addEventListener("change", e => {
    if (e.target.files.length == 0) {
        // No file selected, ignore 
        return;
    }
    const imageFile = e.target.files[0];
    document.querySelector("img").src = URL.createObjectURL(imageFile);
    document.querySelector("img").style.display = "block";
});

clearBtn.addEventListener("click", () => {
    try{
        qrcodeClose();
    }
    catch(e){

    }
    fileinput.value = "";
    dnNo.value = "";
    document.querySelector("img").style.display = "none";
});