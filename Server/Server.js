const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mqtt = require('mqtt');
const mongoose = require('mongoose');

const mqttServer = 'mqtt://broker.emqx.io'; // MQTT server address
const mqttTopic = 'topic786'; // MQTT topic
const mqttUsername = 'mfahimch'; // MQTT username
const mqttPassword = '78678PPI'; // MQTT password

// MongoDB Configuration
const mongoURI =
  'mongodb+srv://fahimaurlab:78678ppired@cluster0.oazo5hn.mongodb.net/test?retryWrites=true&w=majority'; // Replace with your MongoDB connection string

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema for the data
const sensorDataSchema = new mongoose.Schema({
  timestamp: {type: Date, default: Date.now},
  data: Object,
});

// Create a model based on the schema
const SensorData = mongoose.model('SensorData', sensorDataSchema);

// WebSocket Configuration
const socketPort = 6000; // WebSocket server port

// MQTT Client
const mqttOptions = {
  username: mqttUsername,
  password: mqttPassword,
};
const mqttClient = mqtt.connect(mqttServer, mqttOptions);

mqttClient.on('connect', () => {
  console.log('Connected to MQTT server');
  mqttClient.subscribe(mqttTopic);
});

mqttClient.on('message', async (topic, message) => {
  if (topic === mqttTopic) {
    console.log('Received MQTT message:');
    console.log('Topic:', topic);
    console.log('Message:', message.toString());

    try {
      const data = JSON.parse(message.toString());
      console.log('Received data:', data);

      io.emit('sensorData', {
        data,
      });

      // Save the received data to MongoDB
      const sensorData = new SensorData({data});
      await sensorData.save();
      console.log('Data saved to MongoDB');
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }
});

// WebSocket Server
io.on('connection', socket => {
  console.log('WebSocket client connected');

  socket.on('disconnect', () => {
    console.log('WebSocket client disconnected');
  });
});

// Express Routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});
// Express API endpoint to fetch data from MongoDB
// Define a variable to hold the interval ID
let fetchInterval;

app.get('/api/data', async (req, res) => {
  try {
    // Fetch the initial data
    let sensorData = await fetchSensorData(3); // Fetch the last 3 data points
    console.log('Initial data fetched from MongoDB:', sensorData);
    res.json(sensorData);

    // Start the interval to continuously fetch updated data
    fetchInterval = setInterval(async () => {
      sensorData = await fetchSensorData(1); // Fetch only the latest data point
      console.log('Updated data fetched from MongoDB:', sensorData);
    }, 10000000); // Fetch data every 5 seconds (adjust the interval as needed)
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({error: 'Internal server error'});
  }
});

// Utility function to fetch the latest data from MongoDB
const fetchSensorData = async limit => {
  try {
    const sensorData = await SensorData.find()
      .sort({timestamp: -1}) // Assuming there is a "timestamp" field to track the data's timestamp
      .limit(limit) // Fetch the specified number of documents
      .exec();
    return sensorData;
  } catch (error) {
    console.error('Error fetching sensor data:', error);
    throw error;
  }
};

// Stop the interval when the server is shut down or restarted
process.on('SIGINT', () => {
  clearInterval(fetchInterval);
  process.exit();
});

// Start the server
const port = 60000; // Choose a port number
server.listen(port, () => {
  console.log(`WebSocket and Express server running on port ${port}`);
});
