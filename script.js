const photoInput = document.getElementById("photoInput");
const userPhoto = document.getElementById("userPhoto");
const previewArea = document.getElementById("previewArea");

photoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    userPhoto.src = reader.result;
    previewArea.style.display = "block";
  };
  reader.readAsDataURL(file);
});

function downloadImage() {
  alert("For static demo, right-click on image → Save Image.\n(Backend-free limitation)");
}

function shareWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=Check%20my%20New%20Year%20Greeting%20${url}`, "_blank");
}
