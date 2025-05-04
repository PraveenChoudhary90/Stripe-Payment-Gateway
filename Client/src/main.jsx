import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store.jsx';
import {Provider} from "react-redux";
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import Payment from './Pages/Payment.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       {/* <Elements stripe={stripePromise}> */}
      {/* <Payment /> */}
    <App />
    {/* </Elements> */}
    </Provider>
  </StrictMode>
)
