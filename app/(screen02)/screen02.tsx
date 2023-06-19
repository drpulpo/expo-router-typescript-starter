import { View,Text } from "react-native";
import { Link } from "expo-router";
import { Stack } from "expo-router";


export default function Screen02() {
  return (
    <View>
      <Stack.Screen
        options={{
          // https://reactnavigation.org/docs/headers#setting-the-header-title
          title: "Screen 02",
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
      <Text>Screen 02</Text>
      <Link href="/home">Go to Home Screen</Link>
      <Link href="/screen01">Go to Screen 01</Link>
    </View>
    );
}