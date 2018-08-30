import Match from './components/Match'
import * as React from 'react'
import styles from './styles'

class App extends React.Component {
  public render() {
    return (
      <div style={styles.app}>
        <div style={styles.content}>
          <div />
          <Match />
          <div />
        </div>
      </div>
    )
  }
}

export default App
