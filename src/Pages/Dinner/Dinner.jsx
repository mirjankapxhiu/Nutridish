import React from 'react'
import f1 from '../../fotos/1.jpg'
import f2 from '../../fotos/2.webp'
import f3 from '../../fotos/3.jpeg'
import f4 from '../../fotos/4.jpg'
import f6 from '../../fotos/6.webp'
import f7 from '../../fotos/7.jpeg'
import f8 from '../../fotos/8.webp'
import f9 from '../../fotos/9.jpg'
import f10 from '../../fotos/10.jpg'
import f11 from '../../fotos/11.jpeg'
import f12 from '../../fotos/12.jpg'
import f13 from '../../fotos/13.webp'
import f14 from '../../fotos/14.jpg'
import f16 from '../../fotos/16.jpg'
import f17 from '../../fotos/17.webp'
import f18 from '../../fotos/icons8-lottery-64.png'
import viajar from '../../fotos/viaje.png'
import dinero from '../../fotos/dinero.png'
import champions from '../../fotos/champions.png'
import gift from '../../fotos/giftcard.png'




const Dinner = () => {
  return (
  <>
  
  
  <section className="banner">
			<div className="content-banner">
				<p>Comidas Sanos</p>
				<h2>100% Natural <br />Y Fresco</h2>
			</div>
		</section>

		<main className="main-content">
			<div className='lottery-content'>
		<img src={f18} alt="lottery" />
		<h2 className='lottery '>Sorteo Aleatorio </h2></div>
			<section className="container container-features">
				<div className="card-feature">
				<img src={viajar} alt="Viajar" />
					<div className="feature-content">
						<span>Viajar por el mundo</span>
					
					</div>
				</div>
				<div className="card-feature">
					<img src={dinero} alt="Dinero" />
					<div className="feature-content">
						<span>Efectivo en Mano</span>
					</div>
				</div>
				<div className="card-feature">
				<img src={gift} alt="Gift" />
					<div className="feature-content">
						<span>Tarjeta regalo especial</span>
					</div>
					
				</div>
				<div className="card-feature">
				<img src={champions} alt="Champions" />
					<div className="feature-content">
						<span>Champions Leage</span>
						
					</div>
				</div>
			</section>

			<section className="container top-categories">
				<h1 className="heading-1">Estrellas de Aplicacion</h1>
				<div className="container-categories">
					<div className="card-category category-moca">
						<p>Ensalaa de Atun</p>
						<span>Ver más</span>
						<div className='start'>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i></div>
					</div>
					
					<div className="card-category category-expreso">
						<p>Pollo a la Plancha</p>
						<span>Ver más</span>
						<div className='start'>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i></div>
					</div>
					<div className="card-category category-capuchino">
						<p>Ensalada Vegetal</p>
						<span>Ver más</span>
						<div className='start'>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i></div>
						

					</div>

				</div>
			</section>

			<section className="container top-products">
				<h1 className="heading-1">Mejores Productos</h1>

				<div className="container-options">
					<span className="active">Destacados</span>
					<span>Más recientes</span>
					<span>Mejores Vendidos</span>
				</div>

				<div className="container-products">
					<div className="card-product">
						<div className="container-img">
							<img src={f1} alt="Cafe Irish" />
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
									
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
								
							</div>
							<h3>Food</h3>
							<span className="add-cart">
							
									<i className="fa-regular fa-heart"></i>
													</span>
						</div>
					</div>
					<div className="card-product">
						<div className="container-img">
							<img
								src={f2}
								alt="Cafe incafe-ingles.jpg"
							/>
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
								<i className="fa-regular fa-star"></i>
							</div>
							<h3>Food</h3>
							<span className="add-cart">
						<i className="fa-regular fa-heart"></i></span>
						</div>
					</div>
					<div className="card-product">
						<div className="container-img">
							<img
								src={f3}
								alt="Cafe Australiano"
							/>
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
							</div>
							<h3>Food</h3>
							<span className="add-cart">
							<i className="fa-regular fa-heart"></i>
							</span>
						</div>
					</div>
					<div className="card-product">
						<div className="container-img">
							<img src={f4} alt="Cafe Helado" />
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
							</div>
							<h3>Food</h3>
							<span className="add-cart">
							<i className="fa-regular fa-heart"></i>
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="gallery">
				<img
					src={f1}
					alt="Gallery Img1"
					className="gallery-img-1"
				/><img
					src={f6}
					alt="Gallery Img2"
					className="gallery-img-2"
				/><img
					src={f7}
					alt="Gallery Img3"
					className="gallery-img-3"
				/><img
					src={f8}
					alt="Gallery Img4"
					className="gallery-img-4"
				/><img
					src={f9}
					alt="Gallery Img5"
					className="gallery-img-5"
				/>
			</section>

			<section className="container specials">
				<h1 className="heading-1">Especiales</h1>

				<div className="container-products">
					<div className="card-product">
						<div className="container-img">
							<img src={f10} alt="Cafe Irish" />
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
							</div>
							<h3>Food</h3>
							<span className="add-cart">
							<i className="fa-regular fa-heart"></i>
							</span>
						</div>
					</div>
					<div className="card-product">
						<div className="container-img">
							<img
								src={f11}
								alt="Cafe incafe-ingles.jpg"
							/>
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
								<i className="fa-regular fa-star"></i>
							</div>
							<h3>food</h3>
							<span className="add-cart">
							<i className="fa-regular fa-heart"></i>
							</span>
						</div>
					</div>
					<div className="card-product">
						<div className="container-img">
							<img src={f12} alt="Cafe Viena" />
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
							</div>
							<h3>Food</h3>
							<span className="add-cart">
							<i className="fa-regular fa-heart"></i>
							</span>
						</div>
					</div>
					<div className="card-product">
						<div className="container-img">
							<img src={f13} alt="Cafe Liqueurs" />
							<div className="button-group">
								<span>
									<i className="fa-regular fa-eye"></i>
								</span>
								<span>
									<i className="fa-regular fa-heart"></i>
								</span>
								<span>
									<i className="fa-solid fa-code-compare"></i>
								</span>
							</div>
						</div>
						<div className="content-card-product">
							<div className="stars">
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-solid fa-star"></i>
								<i className="fa-regular fa-star"></i>
							</div>
							<h3>Food</h3>
							<span className="add-cart">
							<i className="fa-regular fa-heart"></i>
							</span>
						</div>
					</div>
				</div>
			</section>

			<section className="container blogs">
				<h1 className="heading-1">Últimos Platos</h1>

				<div className="container-blogs">
					<div className="card-blog">
						<div className="container-img">
							<img src={f14} alt="Imagen Blog 1" />
							<div className="button-group-blog">
								<span>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
								<span>
									<i className="fa-solid fa-link"></i>
								</span>
							</div>
						</div>
						<div className="content-blog">
							<h3>Lorem, ipsum dolor sit</h3>
							<span>Agosto 2023</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Iste, molestiae! Ratione et, dolore ipsum
								quaerat iure illum reprehenderit non maxime amet dolor
								voluptas facilis corporis, consequatur eius est sunt
								suscipit?
							</p>
							<div className="btn-read-more">Leer más</div>
						</div>
					</div>
					<div className="card-blog">
						<div className="container-img">
							<img src={f16}alt="Imagen Blog 2" />
							<div className="button-group-blog">
								<span>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
								<span>
									<i className="fa-solid fa-link"></i>
								</span>
							</div>
						</div>
						<div className="content-blog">
							<h3>Lorem, ipsum dolor sit</h3>
							<span>Agosto 2023</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Iste, molestiae! Ratione et, dolore ipsum
								quaerat iure illum reprehenderit non maxime amet dolor
								voluptas facilis corporis, consequatur eius est sunt
								suscipit?
							</p>
							<div className="btn-read-more">Leer más</div>
						</div>
					</div>
					<div className="card-blog">
						<div className="container-img">
							<img src={f14} alt="Imagen Blog 3" />
							<div className="button-group-blog">
								<span>
									<i className="fa-solid fa-magnifying-glass"></i>
								</span>
								<span>
									<i className="fa-solid fa-link"></i>
								</span>
							</div>
						</div>
						<div className="content-blog">
							<h3>Lorem, ipsum dolor sit</h3>
							<span>Agosto 2023</span>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Iste, molestiae! Ratione et, dolore ipsum
								quaerat iure illum reprehenderit non maxime amet dolor
								voluptas facilis corporis, consequatur eius est sunt
								suscipit?
							</p>
							<div className="btn-read-more">Leer más</div>
						</div>
					</div>
				</div>
			</section>
		</main></>
  )
}

export default Dinner