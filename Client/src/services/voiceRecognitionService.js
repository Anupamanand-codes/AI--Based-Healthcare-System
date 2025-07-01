class VoiceRecognitionService {
  constructor() {
    this.recognition = null;
    this.isListening = false;
    this.onCommand = null;
    this.onError = null;
    this.onStatusChange = null;
    this.initialize();
  }

  initialize() {
    if ('webkitSpeechRecognition' in window) {
      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event) => {
        const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
        if (this.onCommand) {
          this.onCommand(command);
        }
      };

      this.recognition.onerror = (event) => {
        if (this.onError) {
          this.onError(event.error);
        }
      };

      this.recognition.onend = () => {
        if (this.isListening) {
          this.recognition.start();
        }
      };
    } else {
      console.error('Speech recognition not supported');
    }
  }

  startListening() {
    if (this.recognition) {
      this.isListening = true;
      this.recognition.start();
      this._updateStatus('Listening');
    }
  }

  stopListening() {
    if (this.recognition) {
      this.isListening = false;
      this.recognition.stop();
      this._updateStatus('Stopped');
    }
  }

  setCommandCallback(callback) {
    this.onCommand = callback;
  }

  setErrorCallback(callback) {
    this.onError = callback;
  }

  setStatusCallback(callback) {
    this.onStatusChange = callback;
  }

  _updateStatus(status) {
    if (this.onStatusChange) {
      this.onStatusChange(status);
    }
  }

  // Helper method to validate commands
  validateCommand(command) {
    const validCommands = ['forward', 'backward', 'left', 'right', 'stop'];
    return validCommands.includes(command.toLowerCase());
  }
}

export const voiceRecognitionService = new VoiceRecognitionService(); 