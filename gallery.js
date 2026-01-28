console.log("gallery.js loaded");

fetch("../gallery.json")
  .then((res) => res.json())
  .then((images) => {
    const container = document.getElementById("galleryContainer");

    if (!container) {
      console.error("galleryContainer not found");
      return;
    }

    images.forEach((item) => {
      container.innerHTML += `
        <div class="col-lg-4 col-md-6">
          <div class="gallery-item mb-4 border  rounded overflow-hidden">
             <img
              src="${item.image}"
              alt="${item.title}"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
              onclick="openImage('${item.image}')"
            >
          </div>
        </div>
      `;
    });
  })
  .catch((err) => console.error("Gallery error:", err));

function openImage(src) {
  document.getElementById("modalImage").src = src;
}
