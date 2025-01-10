import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;

  ${(props) => css`
    background-color: ${props.theme.COLORS.GRAY_700};
    color: ${props.theme.COLORS.WHITE};
    font-family: ${props.theme.FONT_FAMILY.REGULAR};
    font-size: ${props.theme.FONT_SIZE.MD}px;
  `}
`
