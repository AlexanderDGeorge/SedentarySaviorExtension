chrome.alarms.onAlarm.addListener(onAlarm);

function onAlarm(alarm) {
  console.log("Alarm Fired", alarm);
  // const notification = new Notification('test');
  const audio = new Audio(chrome.runtime.getURL("/alarm.mp3"));
  audio.play();
  // @ts-ignore;
  // document.getElementById('audio').play();
}

chrome.alarms.create("Test", { when: Date.now() + 1000 });
