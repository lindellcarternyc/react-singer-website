import * as React from 'react'

import SiteHeader from './site-header'
import Navigation from './navigation'
import Main from './main'
import PhotoCollectionGallery from './photo-collection-gallery'

export const DesktopAppShell = (): JSX.Element => {
  return (
    <>
      <PhotoCollectionGallery />
      <SiteHeader />
      <Navigation />
      <Main />
    </>
  )
}

export default DesktopAppShell