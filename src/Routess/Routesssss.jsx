import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import BreackFast from '../Pages/Breackfast/BreackFast';
import Lunch from '../Pages/Lunch/Lunch';
import Dinner from '../Pages/Dinner/Dinner';
import NavBar from '../NavBar/NavBar';
import f20 from '../fotos/1.jpg'
import Cuenta from '../Footer/Cuenta';
import Icon from'../fotos/iconApp.png'
import Contactanos from '../Footer/Contactanos';
import AcercaNosotros from '../Footer/AcercaNosotros';
import HistoriaApp from '../Footer/HistoriaApp';
import NewRecet from '../Footer/NewRecet';
import PoliticasPrivacidad from '../Footer/PoliticasPrivacidad';
import TerminosCondiciones from '../Footer/TerminosCondiciones';
import Ayuda from '../Footer/Ayuda';
import Home from '../Pages/Home/Home';


const Rout = () => {
  return (
    <>
    <Router>
    <NavBar/>
    <Routes>
	<Route path="/" element={<Home/>}/>
        <Route path="/breackfast" element={<BreackFast/>}/>
        <Route path="/lunch" element={<Lunch/>}/>
        <Route path="/dinner" element={<Dinner/>}/>
		<Route path="/cuenta" element={<Cuenta/>}/>
		<Route path="/contactanos" element={<Contactanos/>}/>
		<Route path="/acerca" element={<AcercaNosotros/>}/>
		<Route path="/historia" element={<HistoriaApp/>}/>
		<Route path="/receta" element={<NewRecet/>}/>
		<Route path="/politica" element={<PoliticasPrivacidad/>}/>
		<Route path="/terminos" element={<TerminosCondiciones/>}/>
		<Route path="/ayuda" element={<Ayuda/>}/>


    </Routes>  
    </Router>   
       
		<footer className="footer">
			<div className="container container-footer">
				<div className="menu-footer">
					<div className="contact-info">
						<div className="title-footer">
							<img src={Icon} alt="Icon"  className='iconfooter'/>
						</div>
						
						<div className="social-icons">
							<span className="facebook">
								<i className="fa-brands fa-facebook-f"></i>
							</span>
							<span className="twitter">
								<i className="fa-brands fa-twitter"></i>
							</span>
							<span className="youtube">
								<i className="fa-brands fa-youtube"></i>
							</span>
							<span className="pinterest">
								<i className="fa-brands fa-pinterest-p"></i>
							</span>
							<span className="instagram">
								<i className="fa-brands fa-instagram"></i>
							</span>
						</div>
					</div>


					<div className="information">
						<p className="title-footer">Información</p>
						<ul>
							<li><a href="/acerca">Acerca de Nosotros</a></li>
							<li><a href="/historia">Historia del App</a></li>
							<li><a href="/politica">Politicas de Privacidad</a></li>
							<li><a href="/terminos">Términos y condiciones</a></li>
							<li><a href="/contactanos">Contactános</a></li>
						</ul>
					</div>

					<div className="my-account">
						<p className="title-footer">Mi cuenta</p>

						<ul>
							<li><a href="/cuenta">Mi cuenta</a></li>
							<li><a href="/ayuda">Ayuda</a></li>
							<li><a href="#">Idioma</a></li>
							<li><a href="/receta">Mi Receta</a></li>
						</ul>
					</div>

					<div className="newsletter">
						<p className="title-footer">Boletín informativo</p>

						<div className="content">
							<p>
								Suscríbete a nuestros App ahora y mantente al
								día con nuevas Recetas y oferta de Loteria.
							</p>
							<input type="email" placeholder="Ingresa el correo aquí..."/>
							<button>Suscríbete</button>
						</div>
					</div>
				</div>

				<div className="copyright">
					<p>
						Desarrollado por equipo de programadores de Fundacion Espali para el mundo &copy; 2023
					</p>

				</div>
			</div>
		</footer>
    </>
 
  )
}

export default Rout