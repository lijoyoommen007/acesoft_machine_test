
import store from './redux/store'
import Input from './Input'
import { Provider } from 'react-redux'

function TaskTwo() {


  return (
    <Provider store={store}>
        <Input/>
    </Provider>
  )
}

export default TaskTwo 