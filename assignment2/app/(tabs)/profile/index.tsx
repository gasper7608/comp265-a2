import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* adding profile image, just found random one on Google */}
                <Image
                    source={{
                        uri: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_user_personalization&w=740&q=80",
                    }}
                    style={styles.profileImage}
                />

                <Text style={styles.name}>Ava G</Text>
                <Text style={styles.email}>ava@email.com</Text>

                <Link href="/profile/settings" style={styles.button}>
                    Go to Settings
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#414141",
        padding: 20,
        justifyContent: "center",
    },
    card: {
        backgroundColor: "white",
        padding: 25,
        borderRadius: 12,
        elevation: 3,
        alignItems: "center",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#007bff",
        color: "white",
        borderRadius: 6,
        textAlign: "center",
    },
});