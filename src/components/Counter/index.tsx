import { View, Text } from "react-native";

import { styles } from "./styles";

type Props = {
  value: number;
};

export function Counter({ value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}
