import { StyleSheet } from 'react-native';

export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // สีพื้นหลัง
    padding: 10,
  },
  content: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    shadowColor: '#cbf5ffff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // สำหรับ Android
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // สีตัวอักษร
    textAlign: 'center', // จัดกลาง
  },
  footer: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
  },
});
