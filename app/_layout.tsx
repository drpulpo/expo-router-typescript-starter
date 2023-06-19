//import { Slot } from "expo-router";
import { Stack } from "expo-router";

export default function Layout() {
  return (
        //return <Slot />;
        <Stack initialRouteName="(index)" screenOptions={{ headerShown: true}}/>         
    );
  
}