import { ScrollView, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { recipes } from "../../data/recipes";

export default function FavouritesScreen() {
    // only showing recipes that show isFavorite = true
    const favouriteRecipes = recipes.filter((recipe) => recipe.isFavorite);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Favourites</Text>

            {/* using same style as home page */}
            {favouriteRecipes.map((recipe) => (
                <Link
                    key={recipe.id}
                    href={{
                        pathname: "/home/details",
                        params: {
                            title: recipe.title,
                            content: recipe.description,
                        },
                    }}
                    style={styles.card}
                >
                    <Image source={{ uri: recipe.image }} style={styles.image} />
                    <Text style={styles.title}>{recipe.title}</Text>
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
    card: {
        backgroundColor: "#d0d0d0",
        padding: 18,
        borderRadius: 12,
        marginBottom: 20,
        color: "black",
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        padding: 15,
    },
});