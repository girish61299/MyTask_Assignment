import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container : {
        // flex : 1,
        backgroundColor : colors.white
    },
headerContainer : {
    flexDirection : 'row',
    alignSelf : 'center',
    // justifyContent : 'center',
    alignItems : 'center',
    marginHorizontal : 40
},
line : {
    height: 1, 
    width: "30%",
    backgroundColor: 'black', 
},
midText : {
    alignItems : 'center',
    marginHorizontal : 20
}
  });
  

  export default styles