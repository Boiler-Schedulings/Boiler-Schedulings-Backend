const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://boilerschedulings-default-rtdb.firebaseio.com/",
});


exports.readData = functions.https.onRequest(async (request, response) => {
  try {
    const dbRef = admin.database().ref();

    const dataRef = dbRef.child("0oaplC6ojCOUziBBDxrDTG5mjmw2/input");

    // Retrieve data from the database
    const snapshot = await dataRef.once("value");
    const data = snapshot.val();

    // Send the retrieved data as a response
    response.send({data});
  } catch (error) {
    console.error("Error reading data from the database:", error);
    response.status(500).send("Internal Server Error");
  }
});
