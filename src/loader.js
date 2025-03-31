document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");

  // Hide the loader after the page has fully loaded
  window.addEventListener("load", () => {
    if (loader) {
      loader.style.display = "none"; // Hide the loader
    }
  });

  // Fallback: Hide the loader after 5 seconds (in case of an issue)
  setTimeout(() => {
    if (loader) {
      loader.style.display = "none";
    }
  }, 5000);
});
