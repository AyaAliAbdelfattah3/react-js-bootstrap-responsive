import React from 'react'
import Header from './Header'
import { Col, Container, Row } from 'react-bootstrap'
import Data from '../../Data';
import { Carousel } from 'react-bootstrap';
import './Home.css' ;
import { FaFacebook , FaTwitter , FaInstagram , FaYoutube} from 'react-icons/fa'
const Home = () => {
  const blogitem = Data.map((Item) => {
    return (
      <div className='col-md-4'>
        <div className='box'>
          <img src={Item.img} />
          <h5>{Item.title}</h5>
          <span>{Item.time}</span>
          <h6>{Item.price}</h6>
        </div>
        <button>
          <a href='#'>Order Now</a>
        </button>
      </div>
    )
  })
  return (
    <div>
      <>
        <Header />
        <section className='numbers'>
          <Container>
            <Row className='row'>
              <Col className='' md={3}>
                <h2>1287+</h2>
                <h6>Savings</h6>
              </Col>
              <Col className='' md={3}>
                <h2>1266+</h2>
                <h6>Photos</h6>
              </Col>
              <Col className='' md={3}>
                <h2>1244+</h2>
                <h6>Rockets</h6>
              </Col>
              <Col className='' md={3}>
                <h2>1277+</h2>
                <h6>Globes</h6>
              </Col>
            </Row>
          </Container>
        </section>

        {/* will make anther section here because there is ni dynamic in iy */}
        <section className='pride'>
          <Container>
            <Row className='row'>
              <Col className='pride_img' md={6}>
                <img src='https://demo.tutsflow.com/foodera/images/features/1.png' />
              </Col>
              <Col className='' md={6}>
                <h2>We pride ourselves on making real food from the best ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <button className='btn'><a href='#'>Learn more</a></button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* =================== */}
        <section className='ingrediants'>
          <Container>
            <Row>
              <Col className='' md={6}>
                <h2>We make everything by hand with the best possible ingredients.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul>
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Erat volutpat aliquet imperdiet.</li>
                  <li>purus a odio finibus bibendum.</li>
                </ul>
                <button><a href='#' className='lin'>Learn More</a></button>
              </Col>
              <Col className='' md={6}>
                <img src='https://demo.tutsflow.com/foodera/images/features/2.png' />
              </Col>
            </Row>
          </Container>
        </section>
        {/* ============================================= */}
        <section className='testimonials'>
          <Container>
            <Row >
              <Col className='row' lg={12} md={12}>
                <h2>When a man's stomach is full it makes no<br />
                  difference whether he is rich or poor.</h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                  finibus bibendum in sit amet leo. Mauris feugiat erat te </p>

                <a href='#'>Watch Our Story</a>
              </Col>
            </Row>
          </Container>
        </section>
        {/* =============== */}
        <section className='blog'>
          <Container>
            <Row>
              <Col className='rowz' md={12} lg={12}>
                <h2>Explore Our Foods</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br />leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br /> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>

              </Col>

            </Row>
          </Container>

          <div className='row'>
            {blogitem}
          </div>
        </section>

        {/* ====================================== */}
        <section className='slider'>
          <Container>
            <Row>
              <Col className='hh1' md={12} lg={12}>
                <h1>Testimonials</h1>
              </Col>
            </Row>
            <Row>
              <Col className='' md={12} lg={12}>

                <Carousel data-bs-theme="dark" className='Carousel'>
                  <Carousel.Item>
                    <img src='https://demo.tutsflow.com/foodera/images/testimonials/1.jpg' />
                    <Carousel.Caption>
                      <p>"Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts.Separated they <br />live. "</p>
                      <h5>Simab Dave - Web Designer</h5>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src='https://demo.tutsflow.com/foodera/images/testimonials/2.jpg' />
                    <Carousel.Caption>
                      <p>"Far far away, behind the word mountains, far from the countries<br /> Vokalia and Consonantia, there live the blind texts.Separated they <br />live. "</p>

                      <h5>Johnthan Doe - UX Designer</h5>
                    </Carousel.Caption>

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src='https://demo.tutsflow.com/foodera/images/testimonials/1.jpg' />

                    <Carousel.Caption>
                      <p>"Far far away, behind the word mountains, far from the countries<br /> Vokalia and Consonantia, there live the blind texts.Separated they <br />live. "</p>
                      <h5>Maccy Doe - Front End</h5>

                    </Carousel.Caption>
                  </Carousel.Item>

                </Carousel>


              </Col>
            </Row>
          </Container>

        </section>
        {/* ------------------------------------------------ */}
        <section className='asked'>
          <Container>
            <h1>Frequently Asked Questions</h1>
            <Row>
              <Col className='' md={6}>
                <h3> ~ Is Foodera Bread really baked fresh each day?</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia, there live the blind texts. Separated they live in <br />Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </Col>
              <Col className='' md={6}>
                <h3> ~ Do you bake breads containing animal fats or products?</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia, there live the blind texts. Separated they live in <br />Bookmarksgrove right at the coast of the Semantics, a large language.</p>
              </Col>
            </Row>
            <Row>
              <Col className='' md={6}>
                <h3> ~ Can I order your products online?</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia, there live the blind texts. Separated they live in <br />Bookmarksgrove right at the coast of the Semantics, a large language.</p></Col>
              <Col className='' md={6}>
                <h3> ~ When are you opening a shop near me?</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia, there live the blind texts. Separated they live in <br />Bookmarksgrove right at the coast of the Semantics, a large language.</p></Col>
            </Row>
          </Container>
        </section>
        {/* ----------------------------- */}
        <section className='parallax'>
        

          <Container>
            
            <Row className='parallax-inner'>
          <Col className='' md={7}>
          <p>Baked fresh daily by bakers with passion.</p>
          
          </Col>
              <Col className='' md={5}>
          <button><a href='#'>Learn More</a></button>
              
              </Col>
            </Row>
          </Container>

          {/* <div className='parallax-inner'>
          <p>Baked fresh daily by bakers with passion.</p>
          <button><a href='#'>Learn More</a></button>
           
          </div> */}
        </section>
        {/* <section className='parallax2'>
          <div className='overlay'></div>
          <Container className='contr'>
            <Row className='row'>
              <Col className='ppp' md={6}>
                <p>Baked fresh daily by bakers with passion.</p>
              </Col>
              <Col className='bbt' md={6}>
                <button><a href='#'>Learn More</a></button>
              </Col>
            </Row>
          </Container>
        </section> */}
        {/* /////////////// */}
        <section className='lasta'>
          <Container>
            <Row>
              <Col className='sec1' md={12}>
                <h1>Hurry up! Subscribe our newsletter<br />
                  and get 25% Off</h1>
                <p>Limited time offer for this month. No credit card required.</p>

              </Col>
              <Col className='sec2' md={12}>
                <form>
                  <input type='email' placeholder='Email Address Here' className='email'></input>
                  <button>Subscribe</button>
                </form>
              </Col>
            </Row>
          </Container>


        </section>
        {/* --------------------------- */}

        <section className='footer'>
            <Container>
              <Row>
                <Col className='lik' md={12} sm={12}>
                <a href='#' >Register</a>
                <a href='#' >Forum</a>
                <a href='#' > Affiliate</a>
                <a href='#' >FAQ</a>

                </Col>
                
                
                <Col className='social' md={12} sm={12}>
                    < FaFacebook  className='ftyi'/>
                    <FaTwitter className='ftyi'/>
                    <FaInstagram className='ftyi'/>
                    <FaYoutube className='ftyi'/>
                
                </Col>
                <Col className='' md={12} sm={12}>
                <p>© 2021. Foodera. All rights reserved.</p>
                </Col>
              </Row>
            </Container>
        </section>
      </>
    </div>
  )
}

export default Home