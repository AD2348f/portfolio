import React,{useEffect} from 'react';
import './Navbar.scss';
import logo from '../pictures/Logo.png';



const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }

   return (
    <header className={navbarClasses.join(" ")}>

    <div className="logo">
        <img src={logo} />
    </div>
    <nav className="navigation">        
        
            <a className="Header__Button" href="#home">Home</a>
            <a className="Header__Button" href="#techstack">Techstack</a>
            <a className="Header__Button" href="#projects">Projects</a>            
        
    </nav>

</header>
   )
};
export default Navbar;