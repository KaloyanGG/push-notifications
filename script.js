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

// async function requestNotificationPermission() {
//   console.log(12);
//   Notification.requestPermission().then((res) => {
//     new Notification("🔥 Reminder", {
//       body: "Time to check your todos!",
//     });
//     console.log(res);
//   });
// }

// function createNotification() {
//   console.log(13);
//   const a = new Notification("hi", {
//     body: "hifds",
//     tag: "tag",
//   });
// }

const createNotificationBtn = document.querySelector("#createNotificationBtn");
createNotificationBtn.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("Example notification", {
        body: "This is more text",
      });
    } else {
      console.log("problemoo...");
    }
  });
});

console.log(createNotificationBtn);
