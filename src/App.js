import React from 'react';
import Start from './project/Start';
// import ApiFetch from './Components/ApiFetch'
// // import { Provider } from 'react-redux';
// // import { createStore } from 'redux';
// // import reducer from './redux/reducer';
// // import Head from './Head'

// const store = createStore(reducer)
export default class App extends React.PureComponent {
  render() {
    return (
      // <Provider store={store}>
      //   <div>
      //     <Head />
      //   </div>
      // </Provider>
      <div>
        {/* <ApiFetch /> */}
        <Start />
      </div>
    )
  }
}