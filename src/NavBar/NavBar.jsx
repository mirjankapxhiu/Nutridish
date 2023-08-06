import React from 'react'
import { Link } from "react-router-dom";
import Icon from '../fotos/iconApp.png'
import IconLogin from '../fotos/iconLogin.png'
import IconRegister from '../fotos/iconregister.png'




const NavBar = () => {
  return (
    <>
      <header>
			<div className="container-hero">
				<div className="container hero">
					
					<div className="container-logo">
						<img src={Icon} className="iconapp"></img>
						<h1 className="logo"><Link to="/">NUTRIDISH</Link></h1>
					</div>
					<form className='formlogin'>
						<input type="text"name='name' placeholder='Escribe tu Usuario' />
						<input type="email" name='email' placeholder='Escribe tu email' />
						<input type="submit" value="Entrar" />
					</form>

					<div className="container-user">
						<div className='Logini'>
						<img className="imglogin"src={IconLogin} alt='Login'/><span className='logospan'>Login</span></div>
						<div className='Logini'>
						<img className="imglogin"src={IconRegister} alt='Register'/><span className='logospan'>Register</span></div>
           
					</div>
				
				</div>
			</div>

			<div className="container-navbar">
				<nav className="navbar container">
					<i className="fa-solid fa-bars"></i>
					<ul className="menu">
						<li className='breacfastlist'><Link to="/breackfast">BrackFast</Link></li>
						<li className='lunchlist'><Link to="/lunch">Lunch</Link></li>
                        <li className='dinnerlist'><Link to="/dinner">Dinner</Link></li>

				
					</ul>

					<form className="search-form">
						<input type="search" placeholder="Buscar..." />
						<button className="btn-search">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</nav>
			</div>
		</header>


      
        

 
 
  </>
  )
}

export default NavBar