import { BackgroundImage } from "@rneui/base";
import React, { useEffect } from "react";
import { View, Image, StyleSheet, ScrollView, Text } from "react-native";

import Slideshow from "react-native-image-slider-show";
import { useDispatch, useSelector } from "react-redux";
import { getTopRated } from "../../redux/slices/topRatedMovie";
import { getNowPlaying } from "../../redux/slices/NowPlatingSlice";
import Section from "./section";
import { getPopular } from "./../../redux/slices/popularSlice";
import { getUpComing } from "../../redux/slices/upComingSlice";

const Home = () => {
  const topRated = useSelector((state) => state.topRated.topRated);
  const NowPlaying = useSelector((state) => state.nowPlaying.nowPlaying);
  const popular = useSelector((state) => state.popular.popular);
  const upComing = useSelector((state) => state.upComing.upComing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopRated());
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getUpComing());
  }, []);
  console.log(upComing);
  let arrImage = [];

  if (NowPlaying) {
    let arr = NowPlaying.results.slice(7, 10);
    arr.map((item) => {
      arrImage.push(item.poster_path);
    });
    // console.log(NowPlaying.results[0].poster_path);
    arrImage = [
      {
        caption: "Now Showing",

        url: "https://image.tmdb.org/t/p/w500/" + arrImage[0],
      },
      {
        caption: "Now Showing",

        url: "https://image.tmdb.org/t/p/w500/" + arrImage[1],
      },
      {
        caption: "Now Showing",

        url: "https://image.tmdb.org/t/p/w500/" + arrImage[2],
      },
    ];
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Slideshow
          onPress={() => {
            // console.log("object");
          }}
          height={500}
          captionStyle={{
            color: "red",
            fontSize: 25,
            fontWeight: 500,
            backgroundColor: "rgba(52, 58, 94, 0.5)'",
            paddingLeft: 100,
            width: "99%",
            borderRadius: 10,
            paddingBottom: 15,
          }}
          dataSource={arrImage}
        />
        <View style={{ marginTop: 50 }}>
          <Section arr={popular} name="Popular"></Section>

          {topRated ? (
            <Section arr={topRated} name="Top Rated"></Section>
          ) : (
            <Text>Loading</Text>
          )}

          <Section arr={upComing} name="Up Coming"></Section>

          {/* <Section></Section>

          <Section></Section> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default Home;
