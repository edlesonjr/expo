import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import { StatusBar } from 'expo-status-bar';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import ActionsOne from '../../components/ActionsOne';

const list = [
  {
    id: 1,
    label: 'Salário',
    value: '3.120,00',
    date: '08/03/2023',
    type: 1 //despesas
  },
  {
    id: 2,
    label: 'Pix  de "Nicholas"',
    value: '45,50',
    date: '18/03/2023',
    type: 1 //receita, recebendo, entradadas
  },
  {
    id: 3,
    label: 'Conta de luz',
    value: '165,70',
    date: '28/03/2023',
    type: 0 //receita, recebendo, entradadas
  },
  {
    id: 4,
    label: 'Pix de "Italo Silva"',
    value: '5,00',
    date: '03/04/2023',
    type: 1 //receita, recebendo, entradadas
  },
  {
    id: 5,
    label: 'Riot Games',
    value: '340,00',
    date: '05/04/2023',
    type: 0 //saída
  },
  {
    id: 6,
    label: 'Netflix',
    value: '55,00',
    date: '06/04/2023',
    type: 0 //saída
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="MoneyMind" />

      <Balance saldo="3.120,00" gastos="-2.550.50" />

      <ActionsOne />

      <Text style={styles.title}>Histórico</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 24,
    paddingBottom: 20,
  },
  list: {
    marginTop: 20,
    marginStart: 14,
    marginEnd: 14,
  }
});

