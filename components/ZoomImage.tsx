import { ReactNode } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const ZoomImage = ({ children }: { children: ReactNode }) => (
  <Zoom>
    {children}
  </Zoom>
)
