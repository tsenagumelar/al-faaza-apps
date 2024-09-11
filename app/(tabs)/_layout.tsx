import { Tabs } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageSourcePropType } from "react-native";

import Icons from "@/src/constants/icons";

const TabLayout = () => {
  const renderIcon = (icon: ImageSourcePropType, focused: boolean) => {
    const size = focused ? 65 : 50;
    const iconSize = focused ? 37.5 : 30;
    return (
      <LinearGradient
        end={[1, 0.5]}
        start={[0, 1]}
        colors={focused ? ["#33cc33", "#29a329", "#33cc33"] : ["#fff", "#fff"]}
        style={{
          width: size,
          height: size,
          marginTop: 12.5,
          display: "flex",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "red",
          justifyContent: "center",
          marginBottom: focused ? 10 : 0,
          elevation: focused ? 5 : 0,
        }}
      >
        <Image
          source={icon}
          style={{
            width: iconSize,
            height: iconSize,
          }}
        />
      </LinearGradient>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderRadius: 50,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => renderIcon(Icons.home, focused),
        }}
      />
      <Tabs.Screen
        name="(quran)"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => renderIcon(Icons.quran, focused),
        }}
      />
      <Tabs.Screen
        name="(kisah)"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => renderIcon(Icons.book, focused),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
