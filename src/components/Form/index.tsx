import React from 'react'
import { CheckboxAndSelect, Title } from './styles'
import { Button, Label as InputLabel} from '../../ui'

// type EmailProps = {
//   type: string
//   placeholder: string
// }

type Props = {
  title: string
  buttonText: string
  setCounter: () => void
  // emailProps: EmailProps
  emailProps: {
    type: string
    placeholder: string
  }
}

// const Form = (props) => (
//   props.title
//   props.buttonText
  
// EcmaScript - Destructuring
const Form = ({ title, buttonText, emailProps, setCounter }: Props) => (
  <form onSubmit={e => e.preventDefault()}>
    <Title>{title}</Title>
    <div>
      <InputLabel>Nome</InputLabel>
      <input name='name' placeholder='João da Silva' />
    </div>
    <div>
      <InputLabel>Email</InputLabel>
      <input
        type={emailProps.type}
        name='email'
        placeholder={emailProps.placeholder}
      />
    </div>
    <div>
      <InputLabel>Data</InputLabel>
      <input
        type='date'
        name='date'
      />
    </div>
    <div>
      <InputLabel>Preço</InputLabel>
      <input
        type='number'
        name='price'
      />
    </div>
    <div>
      <InputLabel>Senha</InputLabel>
      <input
        type='password'
        name='password'
      />
    </div>
    <CheckboxAndSelect>
        <div>
        <input
            type='checkbox'
            name='yesOrNo'
        />
        </div>
        <InputLabel display='inline'>Sim ou não</InputLabel>
        <div>
        <InputLabel>Select</InputLabel>
        <select>
            <option value='1'>Test</option>
            <option value='2'>Test2</option>
        </select>
        </div>
    </CheckboxAndSelect>
    <Button onClick={setCounter}>{buttonText}</Button>
  </form>
)

export default Form