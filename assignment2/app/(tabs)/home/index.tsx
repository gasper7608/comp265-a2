import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Recipes</Text>

            <Link
                href="/home/details?title=Spaghetti&content=A classic Italian pasta dish with tomato meat sauce."
                style={styles.noteCard}
            >
                <Image
                    // just found images from Google
                    source={{ uri: "https://lilluna.com/wp-content/uploads/2014/07/spaghetti-recipe-resize-9.jpg" }}
                    style={styles.image}
                />

                <Text style={styles.noteTitle}>Spaghetti</Text>
            </Link>

            <Link
                href="/home/details?title=Chicken Tacos&content=Soft tortillas filled with seasoned chicken and covered with toppings."
                style={styles.noteCard}
            >
                <Image
                    source={{ uri: "https://hostthetoast.com/wp-content/uploads/2017/04/Crispy-Chicken-Tacos-with-Avocado-Buttermilk-Ranch-7.jpg" }}
                    style={styles.image}
                />

                <Text style={styles.noteTitle}>Chicken Tacos</Text>
            </Link>

            <Link
                href="/home/details?title=Avocado Toast&content=Toasted bread topped with fresh avocado and seasonings."
                style={styles.noteCard}
            >
                <Image
                    source={{ uri: "https://www.jessicagavin.com/wp-content/uploads/2020/07/avocado-toast-20-1200.jpg" }}
                    style={styles.image}
                />

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
    image: {
        width: "100%",
        height: 180,
        borderRadius: 10,
    },
    noteCard: {
        backgroundColor: "#d0d0d0",
        padding: 18,
        borderRadius: 12,
        marginBottom: 20,
        color: "black",
        elevation: 3,
    },
    noteTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 5,
        padding: 5,
    },
});