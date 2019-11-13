import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data }) {
  return (
    <Container>
      <Left>
        <Avatar
          source={{uri:
              data.provider.avatar ? data.provider.avatar.url.replace('localhost', '192.168.1.4')
            : `https://api.adorable.io/avatar/50/kkkkkk.png` }}
        />

        <Info >
          <Name>{data.provider.name}</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name='event-busy' size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
