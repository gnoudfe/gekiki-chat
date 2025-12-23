export enum Role {
  USER = "user",
  MODEL = "model",
  SYSTEM = "system",
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
  attachment?: {
    content: string; // base64
    mimeType: string;
    fileName?: string;
  };
  onImageClick?: (src: string) => void;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
  updatedAt: Date;
  isPinned?: boolean;
}

export enum AuthMode {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
  FORGOT_PASSWORD = "FORGOT_PASSWORD",
}

export interface AuthState {
  mode: AuthMode;
  isLoading: boolean;
  error: string | null;
}
