import { Text, View, SafeAreaView, Image, TextInput } from "react-native";
import React, { Component, useState } from "react";
import { Icon } from "@rneui/base";

import { assets } from "../constants";

const HomeScreen = () => {
  const [value, setValue] = useState("Where to?");

  console.log(value);

  return (
    <SafeAreaView className="flex">
      <View className="my-2 mx-4">
        <View className="flex flex-row justify-center">
          <View className="flex flex-row items-center">
            <View className=" w-12 h-12">
              <Image
                source={assets.whiteCar}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <Text className=" text-3xl">Rides</Text>
          </View>
          <View className="flex flex-row items-center">
            <View className=" w-10 h-10">
              <Image
                source={assets.whiteCar}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <Text className=" text-3xl">Delivery</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between rounded-[90%]  bg-neutral-200 px-3 py-3">
          <View className="flex-row">
            <Image
              source={assets.search}
              className="w-5 h-5 ml-1 mt-1 mr-4 opacity-60"
            />

            <Text className=" self-center text-2xl placeholder:underline opacity-60 ">
              Where to?
            </Text>
          </View>
          <View className="flex-row items-center rounded-[90%] bg-white mx-2 px-4 py-1 self-end">
            <Image source={assets.search} className="w-4 h-4 mr-2" />
            <Text className=" text-black  self-center text-lg ">Now</Text>
          </View>
        </View>
      </View>
      <View className="flex-row items-center mt-[2%] mx-2 px-4 py-1 ">
        <View>
          <Icon name="home" type="foundation" size={32} />
        </View>
        <View className=" ml-[6%] w-full">
          <Text className=" text-black  text-xl ">Home</Text>
          <Text className=" text-black opacity-60  text-lg ">33 Unity Dr</Text>
        </View>
      </View>
      <View className=" ml-[18%] border-b-2 pt-[3%] border-neutral-200 w-full"></View>
      <View className="flex-row items-center mt-[2%] mx-2 px-4 py-1 ">
        <View>
          <Icon name="iso-time" type="ionicon" size={32} />
        </View>
        <View className=" ml-[6%] w-full">
          <Text className=" text-black  text-xl ">2b Yemi Babalola st</Text>
          <Text className=" text-black opacity-60  text-lg ">
            Surulere, Lagos
          </Text>
        </View>
      </View>
      <View className="border-b-2 pt-[6%] border-neutral-200 w-full"></View>
    </SafeAreaView>
  );
};

export default HomeScreen;
