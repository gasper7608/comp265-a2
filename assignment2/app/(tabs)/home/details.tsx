import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailsScreen() {
    const { title, content } = useLocalSearchParams();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{title}</Text>

            <Image
                source={{
                    uri: "https://lilluna.com/wp-content/uploads/2014/07/spaghetti-recipe-resize-9.jpg"
                }}
                style={styles.image}
            />

            <Text style={styles.sectionHeader}>Description</Text>
            <Text style={styles.content}>{content}</Text>

            <Text style={styles.sectionHeader}>Ingredients</Text>
            <Text style={styles.content}>
                {/* couldnt figure out how to make this dynamic so had to just make it text for all of them */}
                {/* asked chat gpt how to split into lines and it showed \n trick */}
                • 2 cups pasta{"\n"}
                • 1 cup tomato sauce{"\n"}
                • 1/2 lb ground beef{"\n"}
                • Salt & pepper
            </Text>

            <Text style={styles.sectionHeader}>Instructions</Text>
            <Text style={styles.content}>
                1. Boil pasta{"\n"}
                2. Cook meat{"\n"}
                3. Add sauce{"\n"}
                4. Combine and serve
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 40,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 12,
        marginBottom: 20,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 20,
        marginBottom: 8,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
        color: "#444",
    },
});