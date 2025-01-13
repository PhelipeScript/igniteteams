import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Message = styled.Text`
  text-align: center;

  ${(props) => css`
    font-size: ${props.theme.FONT_SIZE.SM}px;
    font-family: ${props.theme.FONT_FAMILY.REGULAR};
    color: ${props.theme.COLORS.GRAY_300};
  `}
`
