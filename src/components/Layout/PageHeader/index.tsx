import styled from '@emotion/styled'
import React from 'react'

import { classNames, getLauncherSiteLink } from '../../../utils'
import { IconHeaderClose, IconHeaderMenu } from '../../Icon'
import { ExternalLink } from '../../Link'
import { GamesNav } from './GamesNav'
import { LogoNav } from './LogoNav'
import { SiteNav } from './SiteNav'
import { SocialNav } from './SocialNav'

type MobileMenuWrapperProps = {
  open: boolean
}

const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  @media (max-width: 1280px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
  }
  display: flex;
`

export function PageHeader() {
  const accountCenterUrl = getLauncherSiteLink('/account/home')
  // To distinguish the source of hooks, pleace do not remove the `React.` prefix.
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [gamesNavOpen, setGamesNavOpen] = React.useState(false)
  const handleMobileMenuToggle = React.useCallback(() => setMobileMenuOpen((s) => !s), [])
  const handleGamesNavClick = React.useCallback((open: boolean) => setGamesNavOpen(open), [])

  return (
    <header
      id="header"
      className={classNames(
        'fixed top-0 z-10 w-100vw xl:w-full xl:h-auto bg-black/50 backdrop-blur-10px overflow-auto',
        mobileMenuOpen && 'h-100vh !bg-black/80'
      )}
    >
      <div className="flex flex-col xl:flex-row xl:items-center h-full xl:h-100px xl:px-32px">
        <div className="flex flex-row shrink-0 items-center justify-between xl:justify-start h-68px xl:h-auto px-24px xl:p-0">
          <LogoNav />
          <button className="xl:hidden text-rust" onClick={handleMobileMenuToggle} title="Nav Toggle">
            {mobileMenuOpen && <IconHeaderClose />}
            {!mobileMenuOpen && <IconHeaderMenu />}
          </button>
        </div>
        <MobileMenuWrapper
          className="flex-1 flex-col xl:flex-row xl:items-center xl:justify-between"
          open={mobileMenuOpen}
        >
          <SiteNav onGamesNavClick={handleGamesNavClick} />
          <div className="flex flex-col xl:flex-row items-center gap-24px xl:gap-0 px-32px py-36px xl:p-0 bg-black-bg xl:bg-transparent">
            <SocialNav className="px-26px" />
            <ExternalLink
              to={accountCenterUrl}
              className="rounded-4px px-26px py-10px font-semibold text-14px leading-18px uppercase text-white bg-rust"
            >
              Account Center
            </ExternalLink>
          </div>
        </MobileMenuWrapper>
      </div>
      <div className="hidden h-0 xl:block xl:h-auto">
        <GamesNav open={gamesNavOpen} />
      </div>
    </header>
  )
}
