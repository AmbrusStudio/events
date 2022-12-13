import React from 'react'

import { PageHeader } from './PageHeader'

type PageLayoutProps = {
  className?: string
}

export function BasePageLayout(props: React.PropsWithChildren<PageLayoutProps>) {
  const { className, children } = props
  return (
    <main id="main" className={className}>
      {children}
    </main>
  )
}

export function PageLayout(props: React.PropsWithChildren<PageLayoutProps>) {
  const { className, children } = props

  return (
    <React.Fragment>
      <PageHeader />
      <BasePageLayout className={className}>{children}</BasePageLayout>
    </React.Fragment>
  )
}
