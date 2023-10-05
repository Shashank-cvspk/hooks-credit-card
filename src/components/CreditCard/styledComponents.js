// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
export const CardHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #3b4b69;
  height: 100vh;
  width: 50%;
`
export const CreditHeader = styled.h1`
  color: #ffffff;
  margin: auto;
`
export const CreditImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  margin: auto;
  width: 70%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 10px;
`
export const CardholderName = styled.p`
  color: #ffffff;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const Details = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
`
export const DetailsHolder = styled.div`
  display: flex;
  height: 40vh;
  width: 50vh;
  margin: auto;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  margin-left: 20vh;
  box-shadow: 10px 10px 10px 10px #d3d9e0;
`
export const DetailHeader = styled.h1`
  color: #344e7a;
  margin: auto;
`
export const Input = styled.input`
  margin: auto;
  //   margin-bottom: 5px;
`
