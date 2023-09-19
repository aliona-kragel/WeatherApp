import { Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { FC, PropsWithChildren } from "react";
import { gStyle } from "../styles/styles";

interface SunInfoPropsTypes {
  iconName: any,
  sunInfo: string
}

const SunCycleInfo: FC<PropsWithChildren<SunInfoPropsTypes>> = ({ iconName, sunInfo }) => {
  return (
    <View style={gStyle.sunBlockInfo}>
      <Feather name={iconName} size={24} color="rgba(255, 255, 255, 0.5)" />
      <Text style={gStyle.sunBlockText}>
        {sunInfo}
      </Text>
    </View>
  )
}

export default SunCycleInfo;