"use client";

export function useVoiceInput(
  onResult: (text: string) => void,
  onStart?: () => void,
  onEnd?: () => void
) {
  // SSR check
  if (typeof window === "undefined") {
    return {
      start: () => {},
      stop: () => {},
      isSupported: false,
    };
  }

  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return {
      start: () => {
        console.error("Browser does not support Speech Recognition");
        alert("Your browser does not support voice input.");
      },
      stop: () => {},
      isSupported: false,
    };
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "vi-VN ";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    onStart?.();
  };

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    onResult(transcript);
  };

  recognition.onend = () => {
    onEnd?.();
  };

  recognition.onerror = (e: any) => {
    console.error("Voice error:", e);
    alert("Voice is not allowed");
    onEnd?.();
  };

  return {
    start: () => recognition.start(),
    stop: () => recognition.stop(),
  };
}
