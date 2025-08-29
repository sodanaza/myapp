import { Text, View } from 'react-native';
import { myStyle } from '../styles/mystyle_Box';

export default function Student(item) {  // Destructure props here
  return (
    <View style={myStyle.content}>
      <Text style={myStyle.header}>
        ชื่อ {item.name} , อายุ {item.age} ปี
      </Text>

      {deleteDate && (
        <TouchableOpacity
        style={{
          marginTop: 10,
          backgroundColor:'red',
          padding: 10,
          borderRadius: 8,
        }}
        onPress={() => deteleDate(id)}
        >
          <Text style={{ color:'white', fontWeight: 'bold'}}>ลบ</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}