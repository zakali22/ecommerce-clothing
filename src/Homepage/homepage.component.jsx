import React from "react"
import './homepage.styles.scss'

const Homepage = () => (
	<div className="homepage">
		<div className="product-wrapper">
			<div className="product-wrapper--item">
				<div className="product-wrapper--item__content">
					<h1>Hats</h1>
					<p><a href="#">Shop now</a></p>
				</div>
			</div>
			<div className="product-wrapper--item">
				<div className="product-wrapper--item__content">
					<h1>Jackets</h1>
					<p><a href="#">Shop now</a></p>
				</div>
			</div>
			<div className="product-wrapper--item">
				<div className="product-wrapper--item__content">
					<h1>Trousers</h1>
					<p><a href="#">Shop now</a></p>
				</div>
			</div>
			<div className="product-wrapper--item">
				<div className="product-wrapper--item__content">
					<h1>Mens</h1>
					<p><a href="#">Shop now</a></p>
				</div>
			</div>
			<div className="product-wrapper--item">
				<div className="product-wrapper--item__content">
					<h1>Womens</h1>
					<p><a href="#">Shop now</a></p>
				</div>
			</div>
		</div>
	</div>
)

export default Homepage