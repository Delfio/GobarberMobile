import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import api from '../../services/api';

import { Container, Title, List } from './styles';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments')

      setAppointments(response.data)
    }
    loadAppointments();
  }, [])

  return (
    <Background >
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor = {item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
        />

      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) =>
  <Icon name ="event" size ={20} color ={tintColor} />
}
