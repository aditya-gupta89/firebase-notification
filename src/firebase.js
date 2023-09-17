import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: 'AIzaSyA3y5WKrWfLTiefLMbXN-uMLzQCuHk0AOU',
  authDomain: 'restore-67659.firebaseapp.com',
  projectId: 'restore-67659',
  storageBucket: 'restore-67659.appspot.com',
  messagingSenderId: '1023039915213',
  appId: '1:1023039915213:web:bf94f0dbe5824e13d25584',
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BHnoWHF9o-USIbCPo4Ql08pNehqmtKiIVrAR6UMJU8fjCLNWkA7_g_DJZ4DYz_UDqMJZ6LbwjNzblAU8tk1obe4'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});