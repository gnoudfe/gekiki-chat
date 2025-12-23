"use client";

export function useVoiceInput(
  onResult: (text: string) => void,
  onStart?: () => void,
  onEnd?: () => void
) {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    throw new Error("Browser không hỗ trợ Speech Recognition");
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
