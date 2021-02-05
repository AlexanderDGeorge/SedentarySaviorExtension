const audio = new Audio(chrome.runtime.getURL("/alarm.mp3"));
const icon = chrome.runtime.getURL("/icon144.png");

const createNotification = () => {
  chrome.notifications.create("Stand Up!", {
    type: "basic",
    iconUrl: icon,
    title: "Notification",
    message: "Let's get moving!",
    requireInteraction: true,
  });
};

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log("Alarm Fired", alarm);
  audio.play();
  createNotification();
});

chrome.runtime.onMessage.addListener((message) => {
  console.log(message);
  switch (message.type) {
    case "START":
      chrome.alarms.create("START", { when: Date.now() + message.ms });
      break;
    case "PAUSE":
      chrome.alarms.clear("START");
  }
});
