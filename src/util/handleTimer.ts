export function startTimer(ms: number) {
  chrome.runtime.sendMessage("hfpnfacjdjffcdmlhiaeeggiamkhlhmg", {
    type: "START",
    ms,
  });
}

export function pauseTimer() {
  chrome.runtime.sendMessage("hfpnfacjdjffcdmlhiaeeggiamkhlhmg", {
    type: "PAUSE",
  });
}

export function resetTimer() {}

export {};
