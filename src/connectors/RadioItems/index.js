import RadioItemsContextProvider, {RadioItemsContext} from './context'
import connector from './connector'

export default connector({
  Context: RadioItemsContext, Provider: RadioItemsContextProvider,
})
