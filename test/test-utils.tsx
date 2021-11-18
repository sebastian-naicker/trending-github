import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const QueryWrapper: React.FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default QueryWrapper
