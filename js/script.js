console.log("Samiat Nexus Website Loaded!");



const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebarMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});



const cards = document.querySelectorAll(".project-card");
const lightbox = document.getElementById("lightbox");

if (cards.length > 0 && lightbox) {
    
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxTitle = document.getElementById("lightbox-title");
    const lightboxCategory = document.getElementById("lightbox-category");
    const closeBtn = document.querySelector(".close-btn");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = card.querySelector("img").src;
            lightboxTitle.innerText = card.querySelector("h3").innerText;
            lightboxCategory.innerText = card.querySelector("p").innerText;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.style.display = "none";
    });

    // Scroll Fade Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    });
    cards.forEach(card => observer.observe(card));
}

console.log("Samiat Nexus Website Loaded! ✅");

const form = document.querySelector(".contact-form");
const result = document.getElementById("result");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    result.innerHTML = "Sending Message...";
    result.style.display = "block";

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const responseData = await response.json();

    if (response.ok) {
      result.innerHTML = "✅ Message Sent Successfully!";
      result.style.color = "green";
      form.reset();
    } else {
      result.innerHTML = "❌ Failed to send message. Try again!";
      result.style.color = "red";
    }

    setTimeout(() => {
      result.style.display = "none";
    }, 3000);
  });
}
