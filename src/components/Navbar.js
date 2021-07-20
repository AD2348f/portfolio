import React,{useEffect} from 'react';
import './Navbar.scss';
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
        {/* your logo */}
    </div>
    <nav className="navigation">        
        
            <a href="#home">Home</a>
            <a href="#techstack">Techstack</a>
            <a href="#projects">Projects</a>            
        
    </nav>

</header>
   )
};
export default Navbar;