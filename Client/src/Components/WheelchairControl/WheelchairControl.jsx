import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaStop, FaBluetooth } from 'react-icons/fa';
import { bluetoothService } from '../../services/bluetoothService';
import { voiceRecognitionService } from '../../services/voiceRecognitionService';
import './WheelchairControl.css';

const WheelchairControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState('Disconnected');
  const [lastCommand, setLastCommand] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState('');

  const commands = ['forward', 'backward', 'left', 'right', 'stop'];

  useEffect(() => {
    // Set up Bluetooth status callback
    bluetoothService.setStatusCallback((status) => {
      setStatus(status);
      setIsConnected(status === 'Connected');
    });

    // Set up voice recognition callbacks
    voiceRecognitionService.setCommandCallback((command) => {
      if (voiceRecognitionService.validateCommand(command)) {
        setLastCommand(command);
        handleCommand(command);
      }
    });

    voiceRecognitionService.setErrorCallback((error) => {
      setError(`Voice recognition error: ${error}`);
    });

    voiceRecognitionService.setStatusCallback((status) => {
      setIsListening(status === 'Listening');
    });

    return () => {
      // Cleanup
      bluetoothService.disconnect();
      voiceRecognitionService.stopListening();
    };
  }, []);

  const startListening = () => {
    if (!isConnected) {
      setError('Please connect to the wheelchair first');
      return;
    }
    voiceRecognitionService.startListening();
  };

  const stopListening = () => {
    voiceRecognitionService.stopListening();
  };

  const connectBluetooth = async () => {
    try {
      const connected = await bluetoothService.connect();
      if (!connected) {
        setError('Failed to connect to wheelchair');
      }
    } catch (error) {
      setError(`Connection error: ${error.message}`);
    }
  };

  const handleCommand = async (command) => {
    try {
      if (!isConnected) {
        setError('Not connected to wheelchair');
        return;
      }
      await bluetoothService.sendCommand(command);
    } catch (error) {
      setError(`Command error: ${error.message}`);
    }
  };

  return (
    <div className="wheelchair-control">
      <div className="control-header">
        <h2> AI Based Voice-Controlled Smart Wheelchair</h2>
        <div className="status-indicator">
          <FaBluetooth className={isConnected ? 'connected' : 'disconnected'} />
          <span>{status}</span>
        </div>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="control-panel">
        <div className="voice-control">
          <button 
            className={`mic-button ${isListening ? 'listening' : ''}`}
            onClick={isListening ? stopListening : startListening}
            disabled={!isConnected}
          >
            <FaMicrophone />
            {isListening ? 'Stop Listening' : 'Start Voice Control'}
          </button>
          {lastCommand && (
            <div className="last-command">
              Last Command: <span>{lastCommand}</span>
            </div>
          )}
        </div>

        <div className="manual-control">
          <h3>Manual Controls</h3>
          <div className="control-grid">
            {commands.map((command) => (
              <button 
                key={command}
                className={`control-button ${command}`}
                disabled={!isConnected}
                onClick={() => handleCommand(command)}
              >
                {command.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="status-panel">
          <h3>System Status</h3>
          <div className="status-details">
            <p>Battery Level: 85%</p>
            <p>Connection: {isConnected ? 'Connected' : 'Disconnected'}</p>
            <p>Mode: {isListening ? 'Voice Control' : 'Manual Control'}</p>
          </div>
          {!isConnected && (
            <button 
              className="connect-button"
              onClick={connectBluetooth}
            >
              Connect to Wheelchair
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WheelchairControl; 