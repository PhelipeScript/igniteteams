import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;

  ${(props) => css`
    font-size: ${props.theme.FONT_SIZE.XL}px;
    font-family: ${props.theme.FONT_FAMILY.BOLD};
    color: ${props.theme.COLORS.WHITE};
  `}
`

export const Subtitle = styled.Text`
  text-align: center;

  ${(props) => css`
    font-size: ${props.theme.FONT_SIZE.MD}px;
    font-family: ${props.theme.FONT_FAMILY.REGULAR};
    color: ${props.theme.COLORS.GRAY_300};
  `}
`
