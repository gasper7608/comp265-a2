import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Recipes</Text>

            <Link
                href="/home/details?title=Groceries&content=Milk, Eggs, Bread"
                style={styles.noteCard}
            >
                <Text style={styles.noteTitle}>Spaghetti</Text>
            </Link>

            <Link
                href="/home/details?title=Homework&content=Finish React Native assignment"
                style={styles.noteCard}
            >
                <Text style={styles.noteTitle}>Chicken Tacos</Text>
            </Link>

            <Link
                href="/home/details?title=Workout Plan&content=Leg day at 5pm"
                style={styles.noteCard}
            >
                <Text style={styles.noteTitle}>Avocado Toast</Text>
            </Link>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 40,
    },
    noteCard: {
        backgroundColor: "#b8b8b8",
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
        color: "black",
        elevation: 3,
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
    },
});