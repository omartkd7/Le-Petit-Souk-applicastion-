import { Image, Text } from "react-native";

function Mine() {
  return (
    <view>
      <view>
        <Text>Mine page</Text>
      </view>

      <view id="ithm prodact">
        <view id="prodact 1">
          <Text>prodact 1</Text>
          <Image source={require("@/assets/IMAGE FOOD MAR/1.png")}></Image>
        </view>

        <view id="prodact 2">
          <Text>prodact 1</Text>

          <Image source={require("@/assets/IMAGE FOOD MAR/2.png")}></Image>
        </view>

        <view id="prodact 3">
          <Text>prodact 1</Text>

          <Image source={require("@/assets/IMAGE FOOD MAR/3.png")}></Image>
        </view>

        <view id="prodact 4">
          <Text>prodact 1</Text>

          <Image source={require("@/assets/IMAGE FOOD MAR/4.png")}></Image>
        </view>

        <view id="prodact 5">
          <Text>prodact 1</Text>

          <Image source={require("@/assets/IMAGE FOOD MAR/5.png")}></Image>
        </view>
      </view>
    </view>
  );
}

export default Mine;
