import React, { Suspense } from 'react'
import Loading from './Loading'

export const LazyComponent = React.lazy(() => import('../2-Tours/Tours'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
