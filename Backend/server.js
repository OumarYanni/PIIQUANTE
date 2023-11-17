const app = require("./app");

// Exportation de l'application pour Firebase Functions
const functions = require("firebase-functions");
exports.app = functions.https.onRequest(app);
