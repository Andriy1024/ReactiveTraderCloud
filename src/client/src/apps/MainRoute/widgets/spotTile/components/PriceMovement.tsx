import React from 'react'
import { styled } from 'rt-theme'
import { PriceMovementTypes } from '../model/priceMovementTypes'

interface Props {
  priceMovementType?: string
  spread: string
}

const MovementIcon = styled('i')<{ show: boolean; color: string }>`
  text-align: center;
  color: ${({ theme, color }) => theme.template[color].normal};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
`

const MovementValue = styled.div`
  font-size: 11px;
  opacity: 0.59;
`

const PriceMovementStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  z-index: 1;
`

const PriceMovement: React.FC<Props> = ({ priceMovementType, spread }) => (
  <PriceMovementStyle>
    <MovementIcon
      data-qa="price-movement__movement-icon--up"
      show={priceMovementType === PriceMovementTypes.Up}
      color="green"
      className="fas fa-caret-up"
      aria-hidden="true"
    />
    <MovementValue data-qa="price-movement__movement-value">{spread}</MovementValue>
    <MovementIcon
      data-qa="price-movement__movement-icon--down"
      show={priceMovementType === PriceMovementTypes.Down}
      color="red"
      className="fas fa-caret-down"
      aria-hidden="true"
    />
  </PriceMovementStyle>
)

export default PriceMovement
