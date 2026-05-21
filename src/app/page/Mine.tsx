import { Image, Text } from "react-native";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

function Mine() {
  return (
    <view>
      <view>
        <Text>Mine page</Text>
      </view>

      <ScrollView>
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
      </ScrollView>
    </view>
  );
}

export default Mine;
