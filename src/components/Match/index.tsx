import * as React from 'react'
import styles from './styles'
import Team from '../Team'
import Versus from './Versus'
import Information from './Information'

import bzk from '../../images/logos/bzk_transparent.png'
import heresy from '../../images/logos/heresy_transparent.png'

interface IMatchProps extends React.ClassAttributes<Match> {}

class Match extends React.Component<IMatchProps, {}> {
  public render() {
    return (
      <div style={{ margin: 'auto' }}>
        <div style={styles.match}>
          <Team logo={heresy} />
          <Versus />
          <Team logo={bzk} />
        </div>
        <Information />
      </div>
    )
  }
}

export default Match
