/// <reference lib="webworker" />
/** @type {ServiceWorkerGlobalScope} */
const sw = self;

importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAvlPhLslJEX6_uNixIC0C5pPmKeqLGxeU",
  authDomain: "testing-cloud-messaging-c6c9b.firebaseapp.com",
  projectId: "testing-cloud-messaging-c6c9b",
  storageBucket: "testing-cloud-messaging-c6c9b.firebasestorage.app",
  messagingSenderId: "68796731125",
  appId: "1:68796731125:web:1f9bf0f9388c90e184ffbc",
};

firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title || "Notification";
  const notificationOptions = {
    body: payload.notification.body || "You have a new message",
    icon: "./baby.png",
  };

  return sw.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});

sw.addEventListener("activate", () => {});
sw.addEventListener("install", () => {});

// Handle notification clicks - open the app
sw.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(clients.openWindow("/"));
});

// Handle push events directly (if not using Firebase messaging)
// sw.addEventListener("push", (event) => {
//   if (event.data) {
//     console.log("Push event data:", event.data.text());

//     const data = event.data.json();
//     const options = {
//       body: data.body,
//       icon: "./baby.png",
//     };

//     event.waitUntil(sw.registration.showNotification(data.title, options));
//   }
// });
