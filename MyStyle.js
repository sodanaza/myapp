import { StyleSheet } from 'react-native';
export const mystyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    flexWrap: 'wrap',
    margin:10,
    backgroundColor:"#e12a2aff"
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 30,
    marginTop: 5,
    borderWidth:2,
    alignSelf:'stretch',
  },
  image: {
    width:'100',
    height:'150',
    borderColor:"blue",
    borderWidth:3,
  },
  content: {
     fontSize: 40,
     fontWeight: "bold",
     color: '#ff6c96ff',
     alignItems:"center",
     margin:10,
  },
  Backgro: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
);