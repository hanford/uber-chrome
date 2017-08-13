import React, { PureComponent } from 'react'
import { Frame } from 'chrome-sidebar'
import { url } from './constants'

export class ExtendedFrame extends Frame {

  // state = {
  //   overwrittenNavigator: false
  // }

  // frameMount = ({ frame }) => {
  //   const { contentWindow } = frame

  //   const userAgentProp = { get: () => ua }
  //   const userAgentPlatform = { get: () => platform }
  //   const userAgentVendor = { get: () => vendor }

  //   const { navigator } = contentWindow

  //   Object.defineProperty(navigator, 'userAgent', userAgentProp)
  //   Object.defineProperty(navigator, 'platform', userAgentPlatform)
  //   Object.defineProperty(navigator, 'vendor', userAgentVendor)

  //   this.setState(() => {
  //     return {
  //       overwrittenNavigator: true
  //     }
  //   })
  // }

  render () {
    // const { overwrittenNavigator } = this.state

    return (
      <Frame
        url={url}
        onMount={this.frameMount}
      />
    )
  }
}

export default ExtendedFrame
