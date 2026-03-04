import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Settings</Text>
                <Text style={styles.option}>Dark Mode: Off</Text>
                <Text style={styles.option}>Notifications: On</Text>
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
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
    },
    option: {
        fontSize: 16,
        marginBottom: 8,
    },
});