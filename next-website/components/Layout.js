import Navbar from "./Navbar";
import Footer from "./Footer";
import Fondo from "./Fondo";

export default function Layout({children}){
    return(

      
       <div style={{ backgroundImage: "url(/MFondo5.jpg)" }}>
          <Navbar/> 
          {children}
          <Footer/>
       </div>
    )
}