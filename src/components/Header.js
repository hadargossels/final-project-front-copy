
import './Header.css';
import { Link,NavLink } from 'react-router-dom';

function Header(){
      return(
         <div>
            
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5">
            <div className="container-fluid col-8">
            <div className="myLogo" style={{"backgroundImage":"url(/images/logo3.png)"}}></div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
               <li className="nav-item ms-3">
                  <NavLink to="/" className="nav-link active" aria-current="page" href="#">ראשי</NavLink>
                  </li>
               <li className="nav-item ms-3">
               <NavLink to="/Catalog" className="nav-link" href="#">המוצרים שלנו</NavLink>
               </li>
               <li className="nav-item ms-3">
               <NavLink to="/Courses" className="nav-link" href="#">סדנאות</NavLink>
               </li>
               <li className="nav-item ms-3">
               <NavLink to="/Recipes" className="nav-link" href="#">מתכונים</NavLink>
               </li>
               </ul>
            </div>
            <span class="navbar-text"><i class="fas fa-user"></i></span>
            <span class="navbar-text"><i class="fas fa-shopping-cart"></i></span>

         </div>
         </nav>

         </div>
      );
   }

export default Header;