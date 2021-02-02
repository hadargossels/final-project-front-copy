
import './Header.css';

function Header(){
      return(
         <div>
            
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-4">
            <div className="container-fluid col-8">
            {/* <div className="myLogo"></div> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">
               <li className="nav-item ms-3">
                  <a className="nav-link active" aria-current="page" href="#">ראשי</a>
                  </li>
               <li className="nav-item ms-3">
                  <a className="nav-link" href="#">המוצרים שלנו</a>
               </li>
               <li className="nav-item ms-3">
                  <a className="nav-link" href="#">סדנאות</a>
               </li>
               <li className="nav-item ms-3">
                  <a className="nav-link" href="#">מתכונים</a>
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