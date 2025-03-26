import Logo from "../Assets/Logo.svg";

const NavBar = () => {
  return (
    <div>
      <div className="nav-logo-container"> 
        <img src={Logo || ""} alt="logo donuts" /> {/* Garante que src não seja vazio */}
      </div>
       <div className="nav-menu-container">
           <a href="/">Home</a>
           
       </div>
    </div>
    
  );
};

export default NavBar;