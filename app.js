// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple placeholder behaviour for the URL input
const form = document.getElementById("urlForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = document.getElementById("marketUrl").value.trim();

  if (!url) return;

  // For now, just show a clean modal-like alert (replace later with your real flow)
  alert(
    "Thanks! Analysis will be available after launch.\n\nYou entered:\n" + url
  );

  form.reset();
});
