import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function AddRecipeScreen() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add Recipe</Text>

            <TextInput
                style={styles.input}
                placeholder="Recipe title"
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                style={styles.input}
                placeholder="Recipe description"
                value={description}
                onChangeText={setDescription}
                multiline
            />

            <Button
                title="Save"
                onPress={() => router.back()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
    },
});