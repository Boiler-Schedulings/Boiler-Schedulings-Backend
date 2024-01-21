
// Firebase configuration
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



const userId = 'tLCLdknxTjcOb3zjjCXlQRVqt962';

// Reference to the specific chat node
const chatNodeRef = firebase.database().ref(`${userId}/input/majors`);

// Retrieve chat data once
chatNodeRef.once('value')
  .then(snapshot => {
    const chatData = snapshot.val();
    if (chatData) {
      const majors = chatData.majors;
      console.log('Majors:', majors);
    } else {
      console.error('Chat data not found.');
    }
  })
  .catch(error => {
    console.error('Error fetching chat data from Firebase:', error);
  });