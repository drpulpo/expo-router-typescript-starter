import { View,Text } from "react-native";
import { Link } from "expo-router";
import { Stack } from "expo-router";


export default function Home() {
  return (
    <View>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Home",
          // https://reactnavigation.org/docs/headers#adjusting-header-styles
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
          // headerTitle: (props) => <Text {...props}/>,
        }}
      />
      <Text>Home Screen</Text>
      <Link href="/screen01">Go to Screen01</Link>
      <Link href="/screen02">Go to Screen02</Link>
    </View>
    );
}