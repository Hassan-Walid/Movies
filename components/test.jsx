import React, { useState, useCallback } from "react";
import { StyleSheet, View, Dimensions, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const { width } = Dimensions.get("window");

const VideoScreen = () => {
  const [playing, setPlaying] = useState(false);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        width={width}
        videoId={"Sg8NuJL5P_8"} // Replace with your YouTube video ID
        play={playing}
        onChangeState={(event) => console.log(event)}
      />
      <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

export default VideoScreen;
