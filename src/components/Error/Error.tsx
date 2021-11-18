import React from 'react'

import styles from './Error.module.scss'

type Props = {
  error: string
}

const Error: React.FC<Props> = ({ error }) => {
  return (
    <div className={styles['error']}>
      <div className={styles['error-content']}>
        <p>{error}</p>
      </div>
    </div>
  )
}

export default Error
