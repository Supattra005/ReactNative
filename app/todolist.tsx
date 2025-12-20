import TodoItem from "@/components/week9/TodoItem";
import { getData, storeData } from "@/utils/storage";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

export default function TodoList() {
    const [todos, setTodos] = useState<any[]>([]);

    /* =======================
       LOAD DATA FROM STORAGE
    ======================== */
    const onLoad = async () => {
        const data = await getData("todos");
        if (data) {
            setTodos(data);
        }
    };

    useEffect(() => {
        onLoad();
    }, []);

    /* =======================
       CREATE TODO
    ======================== */
    const onCreate = async () => {
        const newTodo = {
            id: "_" + Math.random().toString(36).substr(2, 9),
            title: "",
            completed: false,
        };

        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        await storeData("todos", newTodos);
    };

    /* =======================
       UPDATE TODO TITLE
    ======================== */
    const onUpdate = async (new_title: string, id: string) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((item) => item.id === id);

        if (index !== -1) {
            newTodos[index].title = new_title;
            setTodos(newTodos);
            await storeData("todos", newTodos);
        }
    };

    /* =======================
       CHECK / UNCHECK TODO
    ======================== */
    const onCheck = async (id: string) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((item) => item.id === id);

        if (index !== -1) {
            newTodos[index].completed = !newTodos[index].completed;
            setTodos(newTodos);
            await storeData("todos", newTodos);
        }
    };

    /* =======================
       DELETE TODO
    ======================== */
    const onDelete = async (id: string) => {
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
        await storeData("todos", newTodos);
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={{ marginTop: 15 }}
                data={todos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TodoItem
                        item={item}
                        onUpdate={onUpdate}
                        onCheck={onCheck}
                        onDelete={onDelete}
                    />
                )}
            />

            {/* ADD BUTTON */}
            <TouchableOpacity
                style={{
                    backgroundColor: "lightblue",
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 15,
                    bottom: 15,
                }}
                onPress={onCreate}
            >
                <FontAwesome name="plus" size={26} />
            </TouchableOpacity>
        </View>
    );
}
