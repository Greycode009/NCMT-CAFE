console.log("menu.js loaded");

fetch("../menu.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("menuContainer");

    if (!container) {
      console.error("menuContainer not found");
      return;
    }

    data.forEach(item => {
      container.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <img src=" ${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body text-center">
              <h5>${item.name}</h5>
              <p>${item.description}</p>
              <strong>रु ${item.price}</strong>
            </div>
          </div>
        </div>
      `;
    });
  })
  .catch(err => console.error("ERROR:", err));
