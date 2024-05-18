import { useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Button, CheckBox } from "@rneui/themed";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Dialog } from "./../../node_modules/@rneui/base/dist/Dialog/index";
import YoutubePlayer from "react-native-youtube-iframe";
import Video from "react-native-video";
import axios from "axios";

const MovieDetails = ({ route }) => {
  const { params } = useRoute();
  console.log(params);
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);
  const [visible5, setVisible5] = useState(false);
  const [checked, setChecked] = useState(1);

  const [playing, setPlaying] = useState(false);
  const onReady = useCallback(() => {
    setPlaying(true); // Start playing automatically when the player is ready
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const toggleDialog5 = () => {
    setVisible5(!visible5);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params}/videos?language=en-US&api_key=1235f752774b75f09525d0d048e824ce`
      )
      .then((res) => {
        setVideo(res.data.results[0].key);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${params}?api_key=750ea252b384c0245473348ca6525dc0`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => console.log("Error: ", err));
  }, [params]);

  if (!movie) {
    console.log("sd", video);
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        {movie.tagline ? (
          <Text style={styles.tagline}>"{movie.tagline}"</Text>
        ) : null}
        <Text style={styles.overview}>{movie.overview}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Release Date:</Text>
          <Text style={styles.infoValue}>{movie.release_date}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Runtime:</Text>
          <Text style={styles.infoValue}>{movie.runtime} minutes</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Vote Average:</Text>
          <Text style={styles.infoValue}>{movie.vote_average}</Text>
        </View>
        <View>
          <Button
            onPress={toggleDialog5}
            title="Show Trailer ∇"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "red",
              borderRadius: 15,
            }}
            containerStyle={{
              padding: 5,
              marginTop: 16,
              // width: 200,
              // marginHorizontal: 50,
              // marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold", color: "wheat" }}
          />
          <Dialog isVisible={visible5} onBackdropPress={toggleDialog5}>
            <Pressable
              onPress={togglePlaying}
              style={{
                width: 300,
                // height: 500,
              }}
            >
              <YoutubePlayer
                height={180}
                // videoId={"Sg8NuJL5P_8"}
                videoId={video}
                play={playing}
                onChangeState={(event) => console.log(event)}
                onReady={onReady}
              />
              {/* <Button
                title={playing ? "Pause" : "Play"}
                onPress={togglePlaying}
              /> */}
              {/* </View> */}
            </Pressable>

            <Dialog.Actions>
              {/* <Dialog.Button
              title="CONFIRM"
              onPress={() => {
                console.log(`Option ${checked} was selected!`);
                toggleDialog5();
              }}
            /> */}
              {/* <Dialog.Button title="CANCEL" onPress={toggleDialog5} /> */}
            </Dialog.Actions>
          </Dialog>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141414",
  },
  loadingText: {
    color: "#fff",
    fontSize: 18,
  },
  poster: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
    textAlign: "center",
  },
  tagline: {
    fontStyle: "italic",
    fontSize: 18,
    marginBottom: 10,
    color: "#bbb",
    textAlign: "center",
  },
  overview: {
    fontSize: 16,
    marginBottom: 20,
    color: "wheat",
    textAlign: "justify",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 16,
    color: "red",
  },
  infoValue: {
    fontSize: 16,
    color: "wheat",
  },
  video: {
    width: "100%",
    height: 300, // Adjust the height as needed
  },
});

export default MovieDetails;
