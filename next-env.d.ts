/// <reference types="next" />
/// <reference types="next/types/global" />

// add `gtag` property to `window` object for google analytics
interface Window {
  // for pageview
  gtag(type: 'config', googleAnalyticsId: string, { page_path: string })
  // for event
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string
      event_category: string
      value?: string
    }
  )
}
