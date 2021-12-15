import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { styles } from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorParamList } from '../../../types';
import Constants from 'expo-constants';

type HomeProps = NativeStackNavigationProp<StackNavigatorParamList, 'Direct'>;

const dados = [
  {
    id: 1,
    nome: 'juliano',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQEsiedG-o1zAg/profile-displayphoto-shrink_200_200/0/1517489275008?e=1640217600&v=beta&t=YCK9H8tCKjIaTiU3z1plT7rG2DuJXmc6IEgndNUoDOI',
    u_online: '1',
  },
  {
    id: 2,
    nome: 'Pomodoro.2',
    foto: 'https://static.paodeacucar.com/img/uploads/1/504/12164504.png',
    u_online: '3',
  },
  {
    id: 3,
    nome: 'mecicareca',
    foto: 'http://pm1.narvii.com/7769/613a8979817e0cf06e5995ba595e80fa7a335db7r1-247-247v2_00.jpg',
    u_online: '4',
  },
  {
    id: 4,
    nome: 'www.allace',
    foto: 'https://cdn.vox-cdn.com/thumbor/w-O9PRGBVQL4LA7q36YWrtZrlnI=/0x0:1147x647/1200x800/filters:focal(483x233:665x415)/cdn.vox-cdn.com/uploads/chorus_image/image/70221420/Jotaro.0.jpeg',
    u_online: '4',
  },
  {
    id: 5,
    nome: 'wallace.2',
    foto: 'https://1.bp.blogspot.com/-0V-iyiLjdvE/YTq1E3oZqYI/AAAAAAAABeg/MolaznANc0kO5Zfw3sA0lXbHriEtYhaygCLcBGAsYHQ/s1280/JoJo%2Bno%2BKimyou%2Bna%2BBouken%2BPart%2B6%2BStone%2BOcean%2Bter%25C3%25A1%2BEpis%25C3%25B3dios%2BMensais%2Bna%2BNetflix%2BMANUAL%2BDO%2BOTAKU.webp',
    u_online: '2',
  },
];


  const renderItemAgenda = ({ item }) => {
    return (
      <View style={styles.item}>
        <View style={styles.item2}>
          <Image
            style={styles.containerFlatListImage}
            source={{ uri: item.foto }}
          />
          <View>
            <Text style={styles.text_nome}>{item.nome}</Text>
            <Text style={styles.text_item}>Online há {item.u_online} h</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/camera.png')}
          style={styles.imagens4}
        />
      </View>
    );
  };



const DATA2 = [
  {
    id: 1,
    nome: 'Bate-Papo',
  },
  {
    id: 1,
    nome: 'Ligações',
  },
  {
    id: 1,
    nome: 'Solicitações',
  },
];

const renderItem2 = ({ item, onPress }) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold',
              marginHorizontal: 10,
            }}>
            {item.nome}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Direct = () => {
  const navigation = useNavigation<HomeProps>();
  function irParaHome() {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity style={styles.bttHome} onPress={irParaHome}>
            <Image
              style={styles.voltar}
              source={require('../../assets/arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.Pomodoro} onPress={irParaHome}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
              Pomodoro
            </Text>

            <Image
              style={styles.voltar2}
              source={require('../../assets/arrow2.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
          <TouchableOpacity style={styles.botoes} onPress={irParaHome}>
            <Image
              style={styles.voltar}
              source={require('../../assets/video.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.botoes} onPress={irParaHome}>
            <Image
              style={styles.voltar}
              source={require('../../assets/editar.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={{ backgroundColor: 'black' }}>
          <FlatList
            data={DATA2}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
            horizontal={true}
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          />
        </View>
        <View style={styles.inputTextView}>
          <Image
            style={{ width: 20, height: 20, margin: 7 }}
            source={require('../../assets/search.png')}></Image>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#F5FFFF"
            style={styles.textInput}></TextInput>
        </View>
        <View>
          <FlatList
            data={dados}
            keyExtractor={(item) => item.id}
            renderItem={renderItemAgenda}
          />
    </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default Direct;
