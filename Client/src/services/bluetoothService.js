class BluetoothService {
  constructor() {
    this.device = null;
    this.characteristic = null;
    this.isConnected = false;
    this.onStatusChange = null;
  }

  async connect() {
    try {
      // Request Bluetooth device with specific service UUID
      this.device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['0000ffe0-0000-1000-8000-00805f9b34fb'] // HC-05 service UUID
      });

      // Connect to the device
      const server = await this.device.gatt.connect();
      const service = await server.getPrimaryService('0000ffe0-0000-1000-8000-00805f9b34fb');
      this.characteristic = await service.getCharacteristic('0000ffe1-0000-1000-8000-00805f9b34fb');

      this.isConnected = true;
      this._updateStatus('Connected');
      
      // Listen for disconnection
      this.device.addEventListener('gattserverdisconnected', () => {
        this.isConnected = false;
        this._updateStatus('Disconnected');
      });

      return true;
    } catch (error) {
      console.error('Bluetooth connection error:', error);
      this._updateStatus('Connection failed');
      return false;
    }
  }

  async sendCommand(command) {
    if (!this.isConnected || !this.characteristic) {
      throw new Error('Not connected to device');
    }

    try {
      // Convert command to appropriate format for HC-05
      const encoder = new TextEncoder();
      const data = encoder.encode(command + '\n');
      await this.characteristic.writeValue(data);
      return true;
    } catch (error) {
      console.error('Error sending command:', error);
      return false;
    }
  }

  disconnect() {
    if (this.device && this.device.gatt.connected) {
      this.device.gatt.disconnect();
    }
    this.isConnected = false;
    this._updateStatus('Disconnected');
  }

  _updateStatus(status) {
    if (this.onStatusChange) {
      this.onStatusChange(status);
    }
  }

  setStatusCallback(callback) {
    this.onStatusChange = callback;
  }
}

export const bluetoothService = new BluetoothService(); 