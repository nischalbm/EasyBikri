import React from "react";

import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop={true}
      source={require("../assets/animations/loading.json")}
    />
  );
}

export default ActivityIndicator;
