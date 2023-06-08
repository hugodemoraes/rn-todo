import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { Logo } from "../../../assets/svg";
import { Counter } from "../../components/Counter";
import { Task } from "../../components/Task";

import { styles } from "./styles";

type Task = {
  description: string;
  completed: boolean;
};

export function Home() {
  const [todo, setTodo] = useState<Task[]>([
    { description: "Teste Teste", completed: false },
  ]);
  const [task, setTask] = useState("");

  const completedTasks = todo.filter((item) => item.completed);

  function handleAddTask() {
    if (!task) return;
    if (todo.find((item) => item.description === task))
      return Alert.alert(
        "Erro",
        "Já existe uma tarefa com a mesma descrição na sua lista."
      );

    setTodo((prev) => [...prev, { description: task, completed: false }]);
    setTask("");
  }

  function handleRemoveTask(task: Task) {
    setTodo(todo.filter((item) => item.description !== task.description));
  }

  function handleCompleteTask(task: Task) {
    setTodo((prev) => [
      ...prev.map((item) => {
        if (item.description !== task.description) return item;
        return {
          ...item,
          completed: !item.completed,
        };
      }),
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Logo />
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Feather name="plus-circle" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          <View style={styles.tab}>
            <Text style={styles.createdText}>Criadas</Text>
            <Counter value={todo.length} />
          </View>
          <View style={styles.tab}>
            <Text style={styles.completedText}>Concluídas</Text>
            <Counter value={completedTasks.length} />
          </View>
        </View>

        <FlatList
          data={todo}
          keyExtractor={(item) => item.description}
          renderItem={({ item }) => (
            <Task
              task={item}
              onRemove={() => handleRemoveTask(item)}
              onCheck={() => handleCompleteTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Feather
                name="inbox"
                size={48}
                color="#333"
                style={styles.emptyIcon}
              />
              <Text style={styles.emptyText}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.text}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
