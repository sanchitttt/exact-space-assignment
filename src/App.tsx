import ChatContainer from './containers/Chat'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <ChatContainer />
      </div>
    </Provider>
  )
}

export default App
