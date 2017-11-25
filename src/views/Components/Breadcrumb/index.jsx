import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import {dark, twilight} from 'react-syntax-highlighter/styles/prism'

const Breadcrumb = styled.nav`
  ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      a {
        font-size: 1rem;
        padding: 0.5em 0.75em;
      }
      & + li {
        &::before {
          content: '\\0227B';
        }
      }
      &.is-active {
        pointer-events: none;
        a {
          color: black;
        }
      }
    }
  }
`
export default () => (
  <div>
  
  <Breadcrumb>
    <ul>
      <li>
        <a href="#"> Home </a>
      </li>
      <li>
        <a href="#"> Components</a>
      </li>
      <li className="is-active">
        <a href="#"> Breadcrumb</a>
      </li>
    </ul>
  </Breadcrumb>
  <div className='columns'>
  <SyntaxHighlighter language="javascript" style={dark} className='column'>
      {`
    <ul>
      <li>
        <a href="#"> Home </a>
      </li>
      <li>
        <a href="#"> Components</a>
      </li>
      <li className='is-active'>
        <a href="#"> Breadcrumb</a>
      </li>
    </ul>
    `}
    </SyntaxHighlighter>
    <SyntaxHighlighter language="css" className='column' style={twilight}>
      {`
ul {
    display: flex;
    li {
        display: flex;
        align-items: center;
        a {
            font-size: 1rem;
            padding: 0.5em 0.75em;
        }
        & + li {
            &::before {
                content: '\\0227B';
            }
        }
        &.is-active {
            pointer-events: none;
            a {
                color: black;
            }
        }
    }
}
    `}
    </SyntaxHighlighter>
  </div>
  </div>
)
