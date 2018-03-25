import * as React from 'react'

import SiteHeader from './site-header'
import Navigation from './navigation'
import Main from './main'
import ModalPhotoGallery from './modal-photo-gallery'

export const DesktopAppShell = (): JSX.Element => {
  return (
    <>
      <ModalPhotoGallery />
      <SiteHeader />
      <Navigation />
      <Main />
    </>
  )
}

export default DesktopAppShell