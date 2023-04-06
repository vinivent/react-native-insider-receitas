import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { FoodCard } from "../../components/foodCard";
import api from "../../services/api";

export function Search() {
  const route = useRoute();
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`);
      setReceipes(response.data);
    }

    fetchReceipes();
  }, [route.params?.name]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodCard data={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.text}>
            Não temos nenhuma receita chamada: {route.params?.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FF",
    flex: 1,
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  text: {
    fontSize: 16,
  },
});
