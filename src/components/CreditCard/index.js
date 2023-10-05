// Write your code here
import {useState} from 'react'

import {
  Container,
  CardHolder,
  CreditHeader,
  CreditImage,
  Details,
  DetailHeader,
  DetailsHolder,
  Input,
  CardholderName,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [name, setName] = useState('')
  const onChangeNumber = event => setCardNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)
  return (
    <Container>
      <CardHolder>
        <CreditHeader>Credit Card</CreditHeader>
        <CreditImage data-testid="creditCard">
          <CardholderName>{cardNumber}</CardholderName>
          <CardholderName>CARDHOLDER NAME</CardholderName>
          <CardholderName>{name}</CardholderName>
        </CreditImage>
      </CardHolder>
      <Details>
        <DetailsHolder>
          <DetailHeader>Payment Method</DetailHeader>
          <Input
            type="string"
            value={cardNumber}
            onChange={onChangeNumber}
            placeholder="Card Number"
          />
          <Input
            type="string"
            value={name}
            onChange={onChangeName}
            placeholder="Cardholder Name"
          />
        </DetailsHolder>
      </Details>
    </Container>
  )
}

export default CreditCard
