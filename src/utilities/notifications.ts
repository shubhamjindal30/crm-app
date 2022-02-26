import * as Notifications from 'expo-notifications';

const schedulePushNotification = async (title: string, body: string, seconds: number) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body
    },
    trigger: { seconds }
  });
};

export { schedulePushNotification };
