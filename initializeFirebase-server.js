const firebaseConfig = {
  apiKey: "AIzaSyAvlPhLslJEX6_uNixIC0C5pPmKeqLGxeU",
  authDomain: "testing-cloud-messaging-c6c9b.firebaseapp.com",
  projectId: "testing-cloud-messaging-c6c9b",
  storageBucket: "testing-cloud-messaging-c6c9b.firebasestorage.app",
  messagingSenderId: "68796731125",
  appId: "1:68796731125:web:1f9bf0f9388c90e184ffbc",
};

const app = firebase.initializeApp(firebaseConfig);
console.log(app);
const messaging = firebase.messaging();
console.log(messaging);

const vapidKey =
  "BH-L88go1voQqShVNwYs7sVV87AJ17nlUq2QIgRGkcPbyKoPAudPpkbzU8msFxX0WQ3xPyxI7DdB74Cm55XCuKc";

function logMsg() {
  console.log(messaging);
}

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

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    }
  });
}
