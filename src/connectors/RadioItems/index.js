import RadioItemsContextProvider, {RadioItemsContext} from './context'
import connector from './connector'

const connectRadioItems = (Component, config) => connector({
  Component,
  config,
  Context: RadioItemsContext,
  ContextProvider: RadioItemsContextProvider,
})

export default connectRadioItems
