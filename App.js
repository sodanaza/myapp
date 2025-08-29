import { Text, View, ImageBackground } from 'react-native';
import Student from './component/Box_Student';
import { mystyles } from './StyleFolder/MyStyle.js';
import { useState } from 'react';
import { FlashList } from '@shopify/flash-list';

export default function App() {
  const [data, setData] = useState([
    { id: "1", name: "Aqua", age: 12 , imageUrl: "https://media.tenor.com/NkY1YcAaTC0AAAAM/minato-aqua-hololive.gif" },
    { id: "2", name: "Akutan", age: 18 , imageUrl: "https://cdn.discordapp.com/attachments/1292047471836659754/1409081432340566016/image.jpg?ex=68ac14d8&is=68aac358&hm=b0b7d3c41210cd9db55636237cb7a3c32dd12031a3c4ba2e375804f0c6fe7363&1" },
    { id: "3", name: "Onion", age: 12 , imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfLhiDb92HyzeQQ7zsuvGM0aqvoZfGPRq4A&s" },
    { id: "4", name: "Ateshi", age: 12 , imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0iquNCVFW7rJpDrm1XqcUHPdlO-ZlDUQCMQ&s" },
    { id: "5", name: "Akatsuki", age: 12 , imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81v625Yw6zPd7JbY-mD1IQ5IxuQSHoBb8Lg&s" },
  ]);

  const deleteData = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id)); // ลบรายการที่มี id ตรงกับที่ส่งมา
    console.log('ลบเลขที่ = ' + id);
  };

  return (
    <ImageBackground 
    source={require('./assets/124822-Azur-Lane-Hololive-Minato-Aqua-Murasaki-Shion-Aki-Rosenthal-Yozora-Mel-Akai-Haato-Oozora-Subaru-Shirakami-Fubuki-Tokino-Sora-Natsuiro-Matsuri-Roboco-Nakiri-Ayame-bed-p.png')} 
    style={mystyles.Backgro}
    >
    <FlashList
      data={data}
      renderItem={({ item }) => (
        <Student 
          name={item.name} 
          age={item.age} 
          imageUrl={item.imageUrl} 
          deleteData={() => deleteData(item.id)}
          />
        )}
        ListHeaderComponent={
          <Text style={mystyles.content}>              ♡MyBeloved♡ 🍬            </Text>
        }
        ListEmptyComponent={
          <Text style={{ alignSelf: "center", fontSize: 20 }}>--NO DATA--</Text>
        }
        ListFooterComponent={
          <Text style={mystyles.content}>      🜲 Create by Chalongsiri     </Text>
        }
      />
    </ImageBackground>
  );
}
