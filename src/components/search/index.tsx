import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Search() {
   return (
      <View className="w-full flex-row bg-transparent border border-slate-700 h-14 rounded-full items-center gap-2 px-4">
         <Feather name="search" size={24} color="#64748b" />

         <TextInput
            placeholder="Procurar sua comida..."
            className="w-full flex-1 h-full bg-transparent"
         />
      </View>
   );
}
