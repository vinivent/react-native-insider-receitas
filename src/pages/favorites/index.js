import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getFavorites } from "../../utils/storage";
import { useIsFocused } from "@react-navigation/native";
import { FoodCard } from "../../components/foodCard";

export function Favorites() {
  const [receipes, setReceipes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites("@appreceitas");
      if (isActive) {
        setReceipes(result);
      }
    }

    if (isActive) {
      getReceipes();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas Favoritas</Text>
      {receipes.length === 0 && (
        <Text>Você não possui nenhuma receita salva!</Text>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodCard data={item}/>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});
