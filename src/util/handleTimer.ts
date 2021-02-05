export function startTimer(ms: number) {
  chrome.runtime.sendMessage({ type: "START", ms });
}

export function pauseTimer() {
  chrome.runtime.sendMessage({ type: "PAUSE" });
}

export function resetTimer() {}

export {};
