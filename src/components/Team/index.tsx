import * as React from 'react'
import styles from './styles'

interface ITeamProps extends React.ClassAttributes<Team> {
  logo: string
}

class Team extends React.Component<ITeamProps, {}> {
  public render() {
    return (
      <div style={styles.logoWrapper}>
        <img
          src={this.props.logo}
          style={{
            WebkitFilter: 'drop-shadow(2px 2px 4px rgba(0,0,0,1))',
          }}
          width="200px"
        />
      </div>
    )
  }
}

export default Team
