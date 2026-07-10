import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const SubscriptionDetails = () => {
    const {id} =useLocalSearchParams<{id: string}>();
  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link href="/">Back to Subscriptions</Link>
     </View>
  );
}
export default SubscriptionDetails;