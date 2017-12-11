//@flow
import * as React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import {dark, twilight} from 'react-syntax-highlighter/styles/prism'

const Divider = styled.div`
  height: 10px;
`

type TabsProps = {
  className?: string,
  style?: {[string]: string}
}

const Tabs = styled.div`
  & {
    font-size: 1rem;
    user-select: none;
    display: flex;
  }
  &.is-small {
    font-size: 0.75rem;
  }
  &.is-fullwidth li {
    flex: 1 0 auto;
  }

  &.is-box {
    a {
      border: 1px solid transparent;
      border-bottom-color: #dbdbdb;
    }
    li.is-active {
      a {
        background-color: white;
        border-color: #dbdbdb;
        border-bottom-color: transparent;
      }
    }
    a:hover {
      background-color: whitesmoke;
      border-bottom-color: #dbdbdb;
    }
  }
  &.is-toggle-rounded {
    a {
      border-style: solid;
      border-color: #dbdbdb;
      position: relative;
      border-width: 1px;
      margin-bottom: 0;
      &:hover {
        background-color: whitesmoke;
        border-color: #b5b5b5;
        z-index: 2;
      }
    }
    li.is-active a {
      color: white;
      background: #3273dc;
      border-color: #3273dc;
      z-index: 1;
    }
    li:first-child a {
      border-bottom-left-radius: 290486px;
      border-top-left-radius: 290486px;
      padding-left: 1.25em;
    }
    li:last-child a {
      border-bottom-right-radius: 290486px;
      border-top-right-radius: 290486px;
      padding-right: 1.25em;
    }
    li + li {
      margin-left: -1px;
    }
    ul {
      border-bottom: none;
    }
  }
  ul {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-start;
    border-bottom: solid 1px #dbdbdb;
    li {
      display: block;
      a {
        border-bottom: solid 1px #dbdbdb;
        padding: 0.5em 1em;
        margin-bottom: -1px;
        text-decoration: none;
        display: flex;
        color: #4a4a4a;
        justify-content: center;
        align-items: center;
        vertical-align: center;
        &:hover {
          color: #363636;
          border-bottom: solid 1px #363636;
        }
      }
      &:hover a {
        border-bottom: solid 1px black;
        color: ;
      }
      &.is-active a {
        border-bottom-color: #3273dc;
        color: #3273dc;
      }
    }
  }
`

const NormalTabs = ({className , style}: TabsProps) => (
  <Tabs className={className} style={style}>
    <ul>
      <li>
        <a>Pictures</a>
      </li>
      <li className="is-active">
        <a>Music</a>
      </li>
      <li>
        <a>Videos</a>
      </li>
      <li>
        <a>Documents</a>
      </li>
    </ul>
  </Tabs>
)

const SmallTabs = (props: TabsProps) => <NormalTabs className="is-small" {...props} />

const FullWidthTabs = (props: TabsProps) => (
  <NormalTabs className="is-fullwidth " {...props} />
)
const BoxTabs = (props: TabsProps) => <NormalTabs className="is-box" {...props} />

const ToggleRoundedTabs = (props: TabsProps) => (
  <NormalTabs className="is-toggle-rounded" {...props} />
)

type SectionProps = {
  title: string,
  comp: React.Node,
  children: React.ChildrenArray<React.Node> | React.Node
}

const Section = ({title, comp, children}: SectionProps) => (
  <div className="section">
    {title && <p className="title">{title}</p>}
    <div className="columns">{comp}</div>
    <div className="columns">
      {React.Children.map(children, (child, idx) => (
        <div className="column" key={idx}>
          {child}
        </div>
      ))}
    </div>
  </div>
)

Section.defaultProps = {
  title: null
}

export default () => (
  <div>
    <Section title="Normal Tabs" comp={<NormalTabs style={{width: '100%'}} />}>
      <SyntaxHighlighter language="javascript" style={dark}>
        {`
<Tabs className={className}>
  <ul>
    <li>
      <a>Pictures</a>
    </li>
    <li className="is-active">
      <a>Music</a>
    </li>
    <li>
      <a>Videos</a>
    </li>
    <li>
      <a>Documents</a>
    </li>
  </ul>
</Tabs>
    `}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={twilight}>
        {`
& {
    font-size: 1rem;
    user-select: none;
    display: flex;
  }
  ul {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-start;
    border-bottom: solid 1px #dbdbdb;
    li {
      display: block;
      a {
        border-bottom: solid 1px #dbdbdb;
        padding: 0.5em 1em;
        margin-bottom: -1px;
        text-decoration: none;
        display: flex;
        color: #4a4a4a;
        justify-content: center;
        align-items: center;
        vertical-align: center;
        &:hover {
          color: #363636;
          border-bottom: solid 1px #363636;
        }
      }
      &:hover a {
        border-bottom: solid 1px black;
        color: ;
      }
      &.is-active a {
        border-bottom-color: #3273dc;
        color: #3273dc;
      }
    }
  }
`}
      </SyntaxHighlighter>
    </Section>
    <Divider />
    <Section title="Small Tabs" comp={<SmallTabs style={{width: '100%'}} />}>
      <SyntaxHighlighter language="css" style={twilight}>
        {`
&.is-small {
    font-size: 0.75rem;
  }
        `}
      </SyntaxHighlighter>
    </Section>
    <Divider />
    <Section
      title="Full Width Tabs"
      comp={<FullWidthTabs style={{width: '100%'}} />}
    >
      <SyntaxHighlighter language="css" style={twilight}>
        {`
&.is-fullwidth li {
  flex: 1 0 auto;
}
`}
      </SyntaxHighlighter>
    </Section>
    <Divider />
    <Section title="Box Tabs" comp={<BoxTabs style={{width: '100%'}} />}>
      <SyntaxHighlighter language="css" style={twilight}>
        {`
&.is-box {
  a {
    border: 1px solid transparent;
    border-bottom-color: #dbdbdb;
  }
  li.is-active {
    a {
      background-color: white;
      border-color: #dbdbdb;
      border-bottom-color: transparent;
    }
  }
  a:hover {
    background-color: whitesmoke;
    border-bottom-color: #dbdbdb;
  }
}
      `}
      </SyntaxHighlighter>
    </Section>
    <Divider />
    <Section
      title="Toggle Rounded Tabs"
      comp={<ToggleRoundedTabs/>}
    >
      <SyntaxHighlighter language="css" style={twilight}>
        {`
&.is-toggle-rounded {
  a {
    border-style: solid;
    border-color: #dbdbdb;
    position: relative;
    border-width: 1px;
    margin-bottom: 0;
    &:hover {
      background-color: whitesmoke;
      border-color: #b5b5b5;
      z-index: 2;
    }
  }
  li.is-active a {
    color: white;
    background: #3273dc;
    border-color: #3273dc;
    z-index: 1;
  }
  li:first-child a {
    border-bottom-left-radius: 290486px;
    border-top-left-radius: 290486px;
    padding-left: 1.25em;
  }
  li:last-child a {
    border-bottom-right-radius: 290486px;
    border-top-right-radius: 290486px;
    padding-right: 1.25em;
  }
  li + li {
    margin-left: -1px;
  }
  ul {
    border-bottom: none;
  }
}
      `}
      </SyntaxHighlighter>
    </Section>
  </div>
)
