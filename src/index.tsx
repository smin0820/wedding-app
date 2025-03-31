import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/global.scss'
import { QueryClientProvider, QueryClient } from 'react-query'
import FullScreenMessage from './components/shared/FullScreenMessage'
import ErrorBoundary from './components/shared/ErrorBoundary'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackUI={<FullScreenMessage type="error" />}>
        <Suspense fallback={<FullScreenMessage type="loading" />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>,
)
