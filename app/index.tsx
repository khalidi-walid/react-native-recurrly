import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-blue-500">Welcome to Nativewid !</Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        GO to onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        GO to sign in
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        GO to sign up
      </Link>
      <Link
        href="/subscriptions/Spotify"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: {
            id: "claude",
          },
        }}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Claude Subscription
      </Link>
    </View>
  );
}
