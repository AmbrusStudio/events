import React from 'react'

import { classNames } from '../../utils'
import { IconClose, IconE4c } from '../Icon'

type CollaboratorProps = {
  className?: string
}

export function E4cCollaborator(props: React.PropsWithChildren<CollaboratorProps>) {
  const { className, children } = props
  return (
    <div className={classNames('flex flex-row flex-nowrap items-center gap-24px', className)}>
      <IconE4c className="w-auto h-36px" />
      <IconClose className="w-22px h-auto" />
      {children}
    </div>
  )
}
