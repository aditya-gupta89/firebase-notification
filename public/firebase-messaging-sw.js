// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyA3y5WKrWfLTiefLMbXN-uMLzQCuHk0AOU',
  authDomain: 'restore-67659.firebaseapp.com',
  projectId: 'restore-67659',
  storageBucket: 'restore-67659.appspot.com',
  messagingSenderId: '1023039915213',
  appId: '1:1023039915213:web:bf94f0dbe5824e13d25584',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
