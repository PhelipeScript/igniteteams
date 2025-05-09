import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Logo } from './styles'

import logoImg from '@assets/logo.png'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  )
}
