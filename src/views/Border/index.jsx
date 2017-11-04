import React from 'react'
import styled from 'styled-components'
import Aux from 'react-aux'

const Section = ({children, title, ...rest}) => [
  <Aux>
    <section {...rest}>
      <h2>{title}</h2>
      {children}
    </section>
    <hr />
  </Aux>,
]

const SectionWithGrey = styled(Section)`background: hsl(0, 10%, 20%);`
const SectionWithGreen = styled(Section)`background: hsl(180, 10%, 20%);`

const TransparentBorder = styled.div`
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: white;
  background-clip: padding-box;
`

const BoxShadowBorder = styled.div`box-shadow: 0 0 0 5px red, 0 0 0 10px pink, 0 0 0 20px yellow`


const Gradient = styled.div`
  height: 2em;
  width: 4em;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background: 
    linear-gradient(135deg, green 50%, hsla(0, 0%, 100%, 1) 0) no-repeat 100% 100% /2em 2em, 
    linear-gradient(135deg, transparent 50%, hsla(0, 20%, 0%, 0.2) 0)  no-repeat 0% 100% /2em 2em
  ;
`


const BorderView = () => {
  return (
    <Aux>
      {/* <SectionWithGrey title="Transparnet Border">
        <TransparentBorder>
          <code>
            border: 10px solid hsla(0, 0%, 100%, 0.5); background: white;
            background-clip: padding-box;
          </code>
        </TransparentBorder>
      </SectionWithGrey>
      <SectionWithGreen title="Multiple Border">
        <BoxShadowBorder>
          <code> box-shadow: 0 0 0 5px red, 0 0 0 10px pink</code>
        </BoxShadowBorder>
      </SectionWithGreen> */}
      <Gradient/>
    </Aux>
  )
}

export {BorderView}
