import * as React from 'react'

const styles = {
  alignItems: 'center',
  display: 'flex',
  fontSize: '42pt',
  lineHeight: '150px',
}

class Versus extends React.Component {
  public render() {
    return (
      <div style={{ margin: 'auto' }}>
        <div style={styles}>VS</div>
      </div>
    )
  }
}

export default Versus
