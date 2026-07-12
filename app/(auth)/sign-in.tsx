import { View, Text } from "react-native";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        GO to sign up
      </Link>
    </View>
  );
};
export default SignIn;
