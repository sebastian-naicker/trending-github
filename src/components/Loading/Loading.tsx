import React from 'react'

import styles from './Loading.module.scss'

type Props = {
  content: string
}

const Loading: React.FC<Props> = ({ content }) => {
  return (
    <div data-testid="loading" className={styles['loading']}>
      <div className={styles['loading-content']}>
        <div data-testid="loading-spinner" className="loadingio-spinner-rolling-bv1vv26je5">
          <div className="ldio-lin2e3un6c">
            <div />
          </div>
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Loading
