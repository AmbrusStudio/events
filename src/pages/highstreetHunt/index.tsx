import styled from '@emotion/styled'

import bgHighstreet1x from '../../assets/bg/bg-highstreet.jpg'
import bgHighstreet2x from '../../assets/bg/bg-highstreet@2x.jpg'
import bgHighstreet3x from '../../assets/bg/bg-highstreet@3x.jpg'
import logoHighstreet from '../../assets/logo/logo-highstreet.png'
import { E4cCollaborator } from '../../components/Collaborator'
import { PageLayout } from '../../components/Layout'
import { ExternalLink } from '../../components/Link'
import { EventHighstreetHunt } from '../../data'
import { classNames, cleanupHTML } from '../../utils'

const EventContainer = styled.section`
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.55) 0%, rgba(217, 217, 217, 0) 50%, rgba(0, 0, 0, 0) 50%),
    image-set(url(${bgHighstreet1x}) 1x, url(${bgHighstreet2x}) 2x, url(${bgHighstreet3x}) 3x);
`

const EventTitle = styled.h1`
  text-shadow: 0px 0px 36px rgba(255, 107, 0, 0.8);
`

const EventSubtitle = styled.h2`
  text-shadow: 0px 0px 24px rgba(255, 107, 0, 0.8);
`

const EventIntroduction = styled.section`
  & p:not(:last-of-type) {
    margin-bottom: 36px;
  }
  & strong {
    font-weight: 600;
  }
`

type EventButtonProps = {
  className?: string
  to?: string
  title?: string
}

function EventButton(props: React.PropsWithChildren<EventButtonProps>) {
  const { className, children, to, title } = props
  return (
    <ExternalLink
      className={classNames(
        'px-22px py-14px border-2px border-white rounded-12px',
        'font-semibold text-16px leading-30px uppercase whitespace-nowrap',
        className
      )}
      to={to}
      title={title}
      blank
    >
      {children}
    </ExternalLink>
  )
}

export function HighstreetHunt() {
  return (
    <PageLayout>
      <EventContainer className="pt-68px xl:pt-100px bg-top-center bg-cover min-h-1024px">
        <div className="p-36px lg:p-60px xl:p-120px">
          <div className="flex flex-col gap-24px max-w-568px">
            <E4cCollaborator className="mx-auto text-white">
              <img className="w-auto h-24px" src={logoHighstreet} alt="Highstreet logo" loading="lazy" />
            </E4cCollaborator>
            <section className="flex flex-col">
              <EventTitle className="font-bold text-56px xl:text-72px leading-72px xl:leading-88px text-white uppercase">
                {EventHighstreetHunt.title}
              </EventTitle>
              <EventSubtitle className="font-bold text-36px leading-44px text-white uppercase">
                {EventHighstreetHunt.subtitle}
              </EventSubtitle>
            </section>
            <EventIntroduction
              className="text-16px leading-30px text-white"
              dangerouslySetInnerHTML={{ __html: cleanupHTML(EventHighstreetHunt.introduction) }}
            />
            <section className="flex flex-row flex-wrap gap-24px">
              <EventButton className="bg-white text-event-hs-red" to={EventHighstreetHunt.button.highstreet.link}>
                {EventHighstreetHunt.button.highstreet.text}
              </EventButton>
              <EventButton className="bg-black/25 text-white" to={EventHighstreetHunt.button.forms.link}>
                {EventHighstreetHunt.button.forms.text}
              </EventButton>
            </section>
          </div>
        </div>
      </EventContainer>
    </PageLayout>
  )
}
