(() => {
  const carousel = document.getElementById("choices");
  const overlay = document.getElementById("reason-overlay");

  if (!carousel || !overlay) {
    return;
  }

  const titleEl = overlay.querySelector(".reason-title");
  const textEl = overlay.querySelector(".reason-text");

  if (!titleEl) {
    return;
  }

  const applyReason = (item) => {
    if (!item) {
      return;
    }

    const title =
      item.getAttribute("data-reason-title") ||
      item.querySelector("img")?.getAttribute("alt") ||
      "Why I Choose Maldives";

    const text =
      item.getAttribute("data-reason-text") ||
      "Maldives combines natural beauty, adventure, and peace in one unforgettable destination.";

    titleEl.textContent = title;
    if (textEl) {
      textEl.textContent = text;
    }

    overlay.classList.remove("reason-overlay--animate");
    void overlay.offsetWidth;
    overlay.classList.add("reason-overlay--animate");
  };

  const initialItem = carousel.querySelector(".carousel-item.active");
  applyReason(initialItem);

  carousel.addEventListener("slid.bs.carousel", (event) => {
    const nextItem = event.relatedTarget || carousel.querySelector(".carousel-item.active");
    applyReason(nextItem);
  });
})();
