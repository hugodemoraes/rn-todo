import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

type Task = {
  description: string;
  completed: boolean;
};
type Props = {
  task: Task;
  onRemove(): void;
  onCheck(): void;
};

export function Task({
  task: { description, completed },
  onRemove,
  onCheck,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={onCheck}
          style={[styles.check, completed && styles.checked]}
        >
          {completed && <Feather name="check" size={12} color="#F2F2F2" />}
        </TouchableOpacity>
        <Text style={[styles.text, completed && styles.textCompleted]}>
          {description}
        </Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash-2" size={18} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
