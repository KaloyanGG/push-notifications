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

// TODO fb version
// check credentials
let app;
let messaging;

console.log("-- script imported");

app = firebase.initializeApp(firebaseConfig);
messaging = firebase.messaging(app);

async function requestNotificationPermission() {
  const res = await Notification.requestPermission();
  if (res === "denied" || res === "default") {
    alert("Notification access is " + res);
    return;
  }

  let reg;
  try {
    reg = await navigator.serviceWorker.register(
      "/push-notifications/firebase-messaging-sw.js",
      {
        scope: "/",
      }
    );
  } catch (e) {
    console.log("---- Error registering our SW");
    console.error(e);
  }
  // console.log("SW Registration:");
  // console.log(await navigator.serviceWorker.getRegistrations());

  //theory: default registration is "/samefolder" but the sw is on the custom domain ot github pages
  try {
    const token = await messaging.getToken({
      vapidKey: vapidKey,
      // serviceWorkerRegistration: reg,
    });
    if (token) {
      console.log("🎱 Token retrieved successfully");
      console.log(token);
      const sth = document.createElement("p");
      sth.textContent = token;
      document.body.appendChild(sth);
    } else {
      requestPermission();
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (error) {
    console.log("Error occured while retrieving token. ");
    console.error(error);
  }
}
