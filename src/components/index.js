import ClickOutside from '../directives/click-outside'
import FocusOutside from '../directives/focus-outside'
import { MButton } from './MButton'
import { MHeading } from './MHeading'
const Holus = {
  install(app, options) {
    registerDirectives(app)
    registerComponents(app, options)
  },
}

function registerDirectives(app) {
  app.directive('click-outside', ClickOutside)
  app.directive('focus-outside', FocusOutside)
}

function registerComponents(app, options) {
  let prefix
  if (options && 'prefix' in options) {
    prefix = `${options.prefix}`
    prefix = prefix.charAt(0).toUpperCase() + prefix.slice(1)
  } else {
    prefix = 'M'
  }
  app.component(`${prefix}Button`, MButton)
  app.component(`${prefix}Heading`, MHeading)
}

export default Holus
export { ClickOutside, FocusOutside, MButton, MHeading }
