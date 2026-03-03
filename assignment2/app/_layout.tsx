import { IconSymbol } from "@/components/ui/icon-symbol";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ tabBarItemStyle: { display: "none" } }} />
      <Tabs.Screen name="(tabs)/home" options={{
        title: "Notes",
        tabBarIcon: ({ color, focused }) => (
          <IconSymbol
            name={'note'}
            size={24}
            color={color}
          />
        ),
      }} />
      <Tabs.Screen name="(tabs)/profile" options={{
        title: "Profile",
        tabBarIcon: ({ color, focused }) => (
          <IconSymbol
            name={'person'}
            size={24}
            color={color}
          />
        ),
      }} />
    </Tabs>
  );
}