import React from 'react'

import { getMainSiteLink } from '../../utils'

export function RedirectToMainSite() {
  React.useEffect(() => {
    if (window) window.location.replace(getMainSiteLink('/'))
  }, [])
  return null
}
