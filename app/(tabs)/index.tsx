import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-900">
      <Text className="text-primary text-5xl font-bold">hello world</Text>

      <Link href="/onboarding">
        <Text className="text-red-500 text-lg mt-4">Go to Onboarding</Text>
      </Link>
      <Link href="/movie/avengers">
        <Text className="text-red-500 text-lg mt-4">Avengers movie</Text>
      </Link>
    </View>
  );
}
