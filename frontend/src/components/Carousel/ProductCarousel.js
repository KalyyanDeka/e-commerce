import React, {useEffect} from 'react'
import { useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { Carousel, Image } from "react-bootstrap"
import Message from "../Message/Message"
import { listTopProducts } from "../../store/actions/productActions"

import "./ProductCarousel.scss"

const ProductCarousel = () => {
    const dispatch = useDispatch()

    const productTopRated = useSelector(state => state.productTopRated)
    const { loading, error, products } = productTopRated

    useEffect(() => {
        dispatch(listTopProducts())
        
    }, [dispatch])
        return (loading ? "  " : error ? <Message variant='danger'>{error}</Message> : (
            <Carousel pause='hover' className='carousel'>
                {products.map(product => (
                    <Carousel.Item key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <Image src={product.image} alt={product.name} fluid />
                            <Carousel.Caption className='carousel-caption'>
                            <h2>{product.name}</h2>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        ))
}

export default ProductCarousel
