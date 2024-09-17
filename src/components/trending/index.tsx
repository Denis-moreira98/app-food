import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { CardHorizontalFood } from "./food";

export interface FoodProps {
   id: string;
   name: string;
   price: number;
   time: string;
   delivery: string;
   rating: number;
   image: string;
   restaurantId: string;
}

export function Trending() {
   const [foods, setFoods] = useState<FoodProps[]>([]);

   useEffect(() => {
      async function getFoods() {
         try {
            const response = await fetch("http://192.168.1.66:3000/foods");
            const data = await response.json();
            setFoods(data);
         } catch (error) {
            console.log(error);
         }
      }

      getFoods();
   }, []);

   return (
      <FlatList
         data={foods}
         renderItem={({ item }) => <CardHorizontalFood food={item} />}
         horizontal={true}
         contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
         showsHorizontalScrollIndicator={false}
      />
   );
}
