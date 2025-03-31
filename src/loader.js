document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");

  if (!loader) return; // Exit if loader is not found

  const hideLoader = () => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.visibility = "hidden";
    }, 500); // Wait for fade-out effect
  };

  // Hide loader when page fully loads
  window.addEventListener("load", hideLoader);

  // Fallback: Ensure it hides after 5 seconds
  setTimeout(hideLoader, 5000);
});
