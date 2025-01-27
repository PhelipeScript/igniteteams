import { Header } from '@components/Header'
import { Container, Form, HeaderList, NumbersOfPlayers } from './styles'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { Alert, FlatList, TextInput } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { PlayerCard } from '@components/PlayerCard'
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button'
import { useRoute } from '@react-navigation/native'
import { AppError } from '@utils/AppError'
import { playerAddByGroup } from '@storage/player/playerAddByGroup'
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam'
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO'

type RouteParams = {
  group: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState<string>('Time 1')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
  const route = useRoute()
  const { group } = route.params as RouteParams
  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.',
      )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)

      newPlayerNameInputRef.current?.blur() // tira o foco do input

      setNewPlayerName('')
      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message)
      } else {
        console.error(error)
        Alert.alert('Nova pessoa', 'Não foi possível adicionar a pessoa.')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      console.error(error)
      Alert.alert(
        'Pessoas',
        'Não foi possível carregar as pessoas do time selecionado.',
      )
    }
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon onPress={handleAddPlayer} icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time 1', 'Time 2']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  )
}
