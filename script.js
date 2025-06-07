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
