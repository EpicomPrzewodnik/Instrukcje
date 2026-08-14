let deferredPrompt = null;
const installButton = document.getElementById("installButton");

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  const result = await deferredPrompt.userChoice;
  console.log("Wybór użytkownika:", result.outcome);

  deferredPrompt = null;
  installButton.hidden = true;
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  installButton.hidden = true;
});
