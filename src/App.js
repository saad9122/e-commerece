
import './App.css';
import { Navbar } from './Components/Common/Navbar/Navbar';
import { Footer } from './Components/Common/Footer/Footer';
import { Women } from './Components/Women/Women';
import { Kids } from './Components/Pages/Kids/Kids';
import { Men } from './Components/Pages/Men/Men.jsx';
import { Route,Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Cart } from './Components/Common/Cart/Cart';
import { Favorite } from './Components/Common/Favorite/Favorite';
import { ProductView } from './Components/Common/Cart/ProductView/ProductView';
import { useNotificationHandler } from './context/NotificationContext.jsx';
import { Notification } from './Components/Notification/Notification.jsx';


const  App = () => {

  const {showNotification,notificationInfo} = useNotificationHandler()


  return (
    <div className="2xl:container mx-auto App overflow-hidden">
    
    <BrowserRouter >

    <Notification showNotification={showNotification} notificationInfo={notificationInfo} />

      <Navbar />
        <Routes>
            {/* <Route path='/' element= {<Home/>}/> */}
            <Route path='/' element ={<Men/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/favorite' element={<Favorite/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/view' element={<ProductView/>}/>
        </Routes>
      
      <Footer/>
    </BrowserRouter>


    </div>
  );
}

export default App;
