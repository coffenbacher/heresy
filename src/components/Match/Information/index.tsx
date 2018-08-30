import * as React from 'react'
import twitch from '../../../images/twitch.png'

const styles = {
  text: {
    fontSize: '24pt',
    textShadow: '2px 2px rgba(0, 0, 0, 0.9)',
  },
  twitch: {
    height: '1em',
    display: 'inline-block',
    padding: '0em 0.25em',
  },
}

class Information extends React.Component {
  public render() {
    return (
      <div style={{ margin: 'auto', marginTop: '2em' }}>
        <div style={styles.text}>
          Friday 18GMT
          <img src={twitch} style={styles.twitch} />
          DemEyesRed
        </div>
        <div style={styles.text}>
          Friday 21GMT
          <img src={twitch} style={styles.twitch} />
          BrAoE2
        </div>
      </div>
    )
  }
}

export default Information
