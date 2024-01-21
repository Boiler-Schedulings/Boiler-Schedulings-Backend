var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const firebaseConfig = {
    apiKey: "AIzaSyDUJcDgS0xwszqMAu33LvpQpBZmRNyN6Ro",
    authDomain: "boilerschedulings.firebaseapp.com",
    databaseURL: "https://boilerschedulings-default-rtdb.firebaseio.com",
    projectId: "boilerschedulings",
    storageBucket: "boilerschedulings.appspot.com",
    messagingSenderId: "785034386913",
    appId: "1:785034386913:web:ee4070166d8b5f2d4646a0",
    measurementId: "G-KX0X1G7XGF"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database;
console.log(database)

/*
// Specify the username you want to retrieve data for
const username = '0oaplC6ojCOUziBBDxrDTG5mjmw2';

// Reference to the specific username in the database
const usernameRef = database.ref(username);

// Read data from the database
usernameRef.once('value')
  .then(snapshot => {
    // Check if the username exists in the database
    if (snapshot.exists()) {
      // Access the 'inputs' node
      const inputs = snapshot.val().input;

      // Iterate through each chat
      for (const chatId in inputs) {
        if (inputs.hasOwnProperty(chatId)) {
          const chat = inputs[chatId].chats;

          // Iterate through each text in the chat
          for (const messageId in chat) {
            if (chat.hasOwnProperty(messageId)) {
              const text = chat[messageId].text;
              const timestamp = chat[messageId].timestamp;

              console.log(`Text: ${text}, Timestamp: ${timestamp}`);
            }
          }
        }
      }
    } else {
      console.log('Username not found in the database.');
    }
  })
  .catch(error => {
    console.error('Error reading data from the database:', error);
  });


*/