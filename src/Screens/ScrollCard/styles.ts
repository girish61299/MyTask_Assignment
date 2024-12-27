import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    listContainer: {
      paddingHorizontal: 10,
      backgroundColor : colors.white
    },
    groupContainer: {
      flexDirection: 'column',
      marginRight: 10,
    },
    itemContainer: {
      width: 150, 
      marginBottom: 10,
      borderRadius: 8,
      padding: 10,
    },
    image: {
      width: 150,
      height: 100,
      borderRadius: 8,
    },
    offerText: {
      position: 'absolute',
      bottom : 60,
      left: 5,
      color: '#fff',
      paddingHorizontal: 10,
      fontSize: 12,
      fontWeight : 700
    },
    title: {
      marginTop: 5,
      color: colors.black,
      fontWeight: 'bold',
      fontSize: 14,
    },
    details: {
      color: colors.black,
      fontSize: 12,
    },
  });
  

  export default styles