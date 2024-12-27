import { StyleSheet } from "react-native";
import colors from "../styles/colors";
import { ColorSchemeName } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 10,
      
    },
    card: {
      backgroundColor: '#1c1c1c', 
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 15,
      elevation: 5,
      flex:1
    },
    image: {
      width: '100%',
      height: 300,
      resizeMode: "cover",
      justifyContent:'flex-end',
      backgroundColor:'yellow'
    },
    infoContainer: {
      backgroundColor:colors.black,
      flexDirection: 'row',
      alignItems: 'center',
      
      justifyContent: 'space-between',
      padding: 10,
    },
    topInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
      
    },
    vStack: {
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        // marginHorizontal : 10,
        marginBottom : 10
      },
       
    timeDistance: {
      color: '#b5b5b5',
      fontSize: 12,
    },
    icon: {
      color: '#fff',
      fontSize: 16,
    },
    title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
    },
    discount: {
      color: '#00d99a',
      fontSize: 12,
      marginTop: 5,
    },
    ratingContainer: {
      alignSelf: 'center',
      backgroundColor: '#2c2c2c',
      borderRadius: 5,
      paddingVertical: 2,
      paddingHorizontal: 8,
    },
    rating: {
      color: '#00d99a',
      fontSize: 12,
      fontWeight: 'bold',
    },
    paginationDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
      },
      paginationContainer: {
        alignSelf: 'center',
        flexDirection: 'row' as 'row',
        alignItems: 'center' as 'center',
        marginLeft : 100,
        bottom : 3
        // marginVertical: moderateScaleVertical(20),
      },
  });

  export default styles;