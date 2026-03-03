import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Link } from "expo-router";
import { recipes } from "../../data/recipes";

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Recipes</Text>
            {/* had to change this so it would take in data rather than just hardcoding the text information, so can toggle */}
            {recipes.map((recipe) => (
                <Link
                // recipe id is which recipe it is (1,2,3, so on)
                    key={recipe.id}
                    href={{
                        pathname: "/home/details",
                        params: {
                            title: recipe.title,
                            content: recipe.description,
                        },
                    }}
                    style={styles.noteCard}
                >
                    <Image source={{ uri: recipe.image }} style={styles.image} />
                    <Text style={styles.noteTitle}>{recipe.title}</Text>
                </Link>
            ))}
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