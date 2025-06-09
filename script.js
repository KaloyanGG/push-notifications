// // async function fetchWhatever() {
// //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// //   const json = await response.json();
// //   console.log(json);
// // }

// // fetchWhatever();

// function addBaby() {
//   const img = document.createElement("img"); // Create a new image element
//   img.src = "./baby.png"; // Set the source of the image
//   // img.src =
//   //   "https://t4.ftcdn.net/jpg/05/81/65/43/360_F_581654303_9gSWVgImKfm3ob47mUIfLRXYAeHr0YfU.jpg";
//   img.alt = "Baby"; // Add an alt attribute for accessibility
//   document.body.appendChild(img); // Append the image to the body
// }

// async function callServer() {
//   const res = await fetch("http://localhost:3000/health");
//   const json = await res.json();
//   console.log(json);
//   return json;
// }

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault(); // Prevent automatic prompt
  deferredPrompt = e; // Save the event for later

  // Show your install button now, e.g. enable a button:
  const btn = document.getElementById("install-btn");
  btn.style.display = "block";
  btn.addEventListener("click", async () => {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User choice:", outcome);
    deferredPrompt = null;
  });
});

async function requestNotificationPermission() {
  Notification.requestPermission().then((res) => {
    new Notification("🔥 Reminder", {
      body: "Notification access granted damn!",
    });
    // console.log(res);
  });
}

requestNotificationPermission();

function createNotification() {
  const n = new Notification("hi", {
    body: new Date().toTimeString(),
    icon: "bird512.png",
  });
  n.addEventListener("error", (e) => {
    console.error(e);
  });
}

function createNotificationFromServiceWorker() {
  navigator.serviceWorker.controller.postMessage("Posted message");
}
