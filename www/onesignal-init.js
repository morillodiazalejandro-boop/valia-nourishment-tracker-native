
import OneSignal from 'onesignal-cordova-plugin';

// Initialize OneSignal Push Notifications
document.addEventListener('deviceready', function() {
  console.log('Initializing OneSignal...');

  OneSignal.setAppId("b8694315-d0e7-45bc-86d9-3ba308ea2082");

  // Handle notification opened
  OneSignal.setNotificationOpenedHandler((jsonData) => {
    console.log('Notification opened:', jsonData);
  });

  // Prompt user for permission
  OneSignal.promptForPushNotificationsWithUserResponse((accepted) => {
    console.log("User accepted notifications: " + accepted);
  });
}, false);
