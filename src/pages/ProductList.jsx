import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function ProductList() {

  const [product, setProduct] = useState([])

  // const fechData = () => {
  //   fetch("https://fakestoreapi.com/products").then(data => data.json()).then(data => setProduct(data))
  // }

  // Using Async await
  // =================
  const fechData = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    data.json().then(data=>setProduct(data))
  }

//   const fechData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json(); // Await the JSON parsing directly
//     setProduct(data); // Now use the parsed data
// }


  useEffect(() => {
    fechData()
  }, [])

  // console.log(product)

  return (
    <>
      <Container>
        <Row className='py-5'>
          <Col lg={6}>
            <div className='p-4'><img src="https://png.pngtree.com/thumb_back/fh260/background/20220202/pngtree-cute-family-choosing-groceries-together-female-father-supermarket-photo-image_21254808.jpg" className='img-fluid rounded' alt="" /></div>
          </Col>
          <Col lg={6} className='d-flex flex-column justify-content-center align-items-center'>
            <h2 style={{ textAlign: "justify" }} className='text-center'>Welcome to Your Shopping World e-<span className='text-warning'>K</span>art</h2>
            <p style={{ textAlign: "justify" }} className='px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti magni magnam molestias iusto, totam vel quod, officia, sapiente aut eos consectetur quis animi accusantium ipsa tempore porro obcaecati numquam?</p>
            <button className='btn btn-warning'>Shop Now</button>
          </Col>
        </Row>
      </Container>
      {

        product.length>0?

        <div className='pb-5'>
        <Container>
          <h1 className='text-center py-3'>Shopping Items</h1>
          <Row className='py-3'>
            {
              product.map(i => (
                <Col lg={3} md={4} sm={6} key={i.id} className="d-flex justify-content-center">
                  <Card className='m-3' style={{ width: '20rem', height: '530px' }}>
                    <Card.Img variant="top" className='img-fluid' src={i.image} style={{ height: '300px' }} />
                    <Card.Body>
                      <Card.Title>{i.title.length > 35 ? i.title.slice(0, 35) + "..." : i.title}</Card.Title>
                      <Card.Text>
                        {/* {i.description} */}
                        <br />
                        <b>Price : ${i.price}</b>
                        <br />
                        <b>Rating : </b>
                        <span className={i.rating.rate > 4 ? "text-success" : i.rating.rate > 3 ? "text-warning" : "text-danger"}>
                          {i.rating.rate}
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-regular fa-star-half-stroke'></i>
                          <i className='fa-regular fa-star-half-stroke'></i>
                        </span>
                      </Card.Text>
                    </Card.Body>
                    <div className='d-flex justify-content-between'>
                      <button className='btn'><i className='fa-solid fa-heart' style={{ color: "red" }}></i></button>
                      <button className='btn'><i className='fa-solid fa-cart-shopping' style={{ color: "green" }}></i></button>
                    </div>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>

      :
      
      <div>
        <div className='text-center p-5'>
          <i class="fa-solid fa-spinner fa-spin fa-7x" style={{ color: 'wheat' }}></i>
          <h4 className='pt-2' style={{ color: 'wheat' }}>Loading</h4>
        </div>
      </div>
      }
    </>
  )
}

export default ProductList
