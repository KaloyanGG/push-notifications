const firebaseConfig = {
  apiKey: "AIzaSyAvlPhLslJEX6_uNixIC0C5pPmKeqLGxeU",
  authDomain: "testing-cloud-messaging-c6c9b.firebaseapp.com",
  projectId: "testing-cloud-messaging-c6c9b",
  storageBucket: "testing-cloud-messaging-c6c9b.firebasestorage.app",
  messagingSenderId: "68796731125",
  appId: "1:68796731125:web:1f9bf0f9388c90e184ffbc",
};
const vapidKey =
  "BH-L88go1voQqShVNwYs7sVV87AJ17nlUq2QIgRGkcPbyKoPAudPpkbzU8msFxX0WQ3xPyxI7DdB74Cm55XCuKc";

let app;
let messaging;

async function requestNotificationPermission() {
  Notification.requestPermission().then((res) => {
    if (res === "denied" || res === "default") {
      alert("Notification access denied or default");
      return;
    }

    app = firebase.initializeApp(firebaseConfig);
    messaging = firebase.messaging();

    messaging
      .getToken({ vapidKey: vapidKey })
      .then((token) => {
        if (token) {
          console.log("🎱 Token retrieved successfully");
          console.log(token);
          const sth = document.createElement("div");
          sth.innerText = token;
          document.body.appendChild(sth);
        } else {
          requestPermission();
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      })
      .catch((err) => {
        console.log("Error occured while retrieving token. ", err);
      });
  });
}
// requestNotificationPermission();

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  });
}
