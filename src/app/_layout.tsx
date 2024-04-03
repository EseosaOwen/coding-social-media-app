import React, { useEffect } from "react";
import { Stack, router, usePathname } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppProvider from "../provider/AppProvider";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  const path = usePathname();

  useEffect(() => {
    if (path) {
      switch (path) {
        case "/onboarding":
          StatusBar.pushStackEntry({ barStyle: "light-content" });
          break;
        case "/login":
          StatusBar.pushStackEntry({ barStyle: "dark-content" });
      }
    }
  }, [path]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(drawer)"
            options={{
              title: "Drawer Nav",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="onboarding"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/login"
            options={{
              title: "",
              headerBackTitle: "",
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerLeft: () => {
                return (
                  <TouchableOpacity onPress={router.back}>
                    <Ionicons name="arrow-back" size={25} color={"black"} />
                  </TouchableOpacity>
                );
              },
            }}
          />
          <Stack.Screen
            name="(splash)/animation"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </AppProvider>
    </GestureHandlerRootView>
  );
}
