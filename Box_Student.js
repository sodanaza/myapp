import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Box_Student = ({ name, age, id, imageUrl, deleteData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* แสดงรูปภาพ */}
        <Image 
          source={{ uri: imageUrl }} // ใช้ URL รูปภาพที่ส่งมาจาก props
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Age: {age}</Text>
        </View>

        {/* ปุ่มลบสีแดง */}
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteData(id)} // เรียกฟังก์ชัน deleteData เมื่อกดปุ่ม 
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  item: {
    backgroundColor: '#ffe9f7ff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '90%',
    flexDirection: 'row', // ใช้แถวเพื่อจัดเรียงข้อมูล
    justifyContent: 'space-between', // ปุ่มลบจะไปอยู่ทางขวา
    alignItems: 'center', // จัดแนวข้อมูลในแถว
  },
  textContainer: {
    flex: 1, // ให้เนื้อหาของ name และ age ใช้พื้นที่ทั้งหมด
    marginLeft: 10,
    fontWeight:'bold' // ระยะห่างจากรูป
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 60,
    height: 70,
    borderRadius: 25,  // ทำให้เป็นวงกลม
  },
  deleteButton: {
    backgroundColor: '#FF4C4C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Box_Student;
