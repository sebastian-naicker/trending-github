import React from 'react'

import styles from './Error.module.scss'

type Props = {
  error: string
}

const Error: React.FC<Props> = ({ error }) => {
  return (
    <div data-testid="error" className={styles['error']}>
      <div className={styles['error-content']}>
        <p>An Error Occurred {error}</p>
      </div>
    </div>
  )
}

export default Error
