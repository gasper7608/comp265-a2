import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Notes</Text>

            <Link
                href="/home/details?title=Groceries&content=Milk, Eggs, Bread"
                style={styles.noteCard}
            >
                <Text style={styles.noteTitle}>Groceries</Text>
            </Link>

            <Link
                href="/home/details?title=Homework&content=Finish React Native assignment"
                style={styles.noteCard}
            >
                <Text style={styles.noteTitle}>Homework</Text>
            </Link>

            <Link
                href="/home/details?title=Workout Plan&content=Leg day at 5pm"
                style={styles.noteCard}
            >
                <Text style={styles.noteTitle}>Workout Plan</Text>
            </Link>
        </View>
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
        backgroundColor: "#ffe600",
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
        color: "black",
        // didn't know how to add shadow to card so had to look it up, used https://stackoverflow.com/questions/41320131/how-to-set-shadows-in-react-native-for-android
        elevation: 3,
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
    },
});