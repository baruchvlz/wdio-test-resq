import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MyDiv = () => {
  const [state] = useState('Hello World')

  return (
    <div>
      {state}
    </div>
  )
}

const MyButton = props => {
    const [state] = useState(() => props.s ? { foo: 'Here' } : {})

    const onClick = e => {
        e.preventDefault()

        console.log('MyButton clicked')
    }

    return (
        <button onClick={onClick}>Click Me { state.foo }</button>
    )
}

const MyComponent = props => (
  <div>
    MyComponent {props.someProps ? '- ' + props.someProps : ''}
  </div>
)

const MyFragment = () => (
  <React.Fragment>
    <div>Div 1</div>
    <div>Div 2</div>
  </React.Fragment>
)

const App = () => (
  <>
    <MyComponent />
    <MyButton />
    <MyButton />
    <MyButton s={true} />
    <MyButton s={true} />
    <MyFragment />
    <MyFragment />
    <MyDiv />
  </>
)

ReactDOM.render(<App />, document.querySelector('#root'))
