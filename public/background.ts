// const audio = new Audio(chrome.runtime.getURL("/alarm.mp3"));
// const icon = chrome.runtime.getURL("/icon144.png");

chrome.browserAction.onClicked.addListener(handleBrowserActionClicked);

function handleBrowserActionClicked(tab) {
  const opts = {
    url: chrome.runtime.getURL("popup.html"),
  };
  chrome.windows.create(opts, handleWindowCreated);
}

function handleWindowCreated(window) {
  console.log("done");
}

// const createNotification = () => {
//   new Notification("Stand Up!", {
//     iconUrl: icon,
//     title: "Notification",
//     message: "Let's get moving!",
//     requireInteraction: true,
//   });
// };

// chrome.alarms.onAlarm.addListener((alarm) => {
//   console.log("Alarm Fired", alarm);
//   audio.play();
//   createNotification();
// });

// chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
//   console.log(message);
//   console.log(sender);

//   switch (message.type) {
//     case "AWAKE":
//       let response;
//       chrome.alarms.getAll((alarms) => {
//         console.log(alarms);
//         response = alarms;
//       });
//       console.log(response);
//       sendResponse(response);
//       break;
//     case "START":
//       chrome.alarms.create("START", { when: Date.now() + message.ms });
//       break;
//     case "PAUSE":
//       chrome.alarms.clear("START");
//   }
//   return true;
// });

// chrome.runtime.onConnect.addListener((port) => {
//   console.log(port);
// });
