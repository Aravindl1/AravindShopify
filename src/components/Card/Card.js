import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Card.css'


const Card = () => {
  return (
        <Container>
            <Row>
                  <div className='d-block d-md-none small-card d-flex justify-content-center'>    
                     <a className='acard-title' href='#section1' >Basic</a><hr className='hr-line'/>
                     <a className='acard-title' href='#section2'>Shopify</a><hr className='hr-line'/>
                     <a className='acard-title'href='#section3'>Advanced</a>
                 </div>
              <Col md={3} className='basic-card shadow m-4 pr-2'>
                 <div className='d-none d-md-block ' id='section1'>
                    <h1 className='card-title1'>Basic</h1>
                    <h2 className='card-title2'>FOR INDIVIDUALS & SMALL BUSINESSES</h2>
                    <p className='card-title3'>Everything you need to create your store, ship products,and process payments</p>
                    <h3 className='card-title4'><span className='basic-span1'>₹1,994</span>INR/mo</h3>
                 </div>
                 <h3 className='smcard-title d-md-none'><span className='smbasic-span'>₹1,994</span>INR/mo</h3>
                 <header className='basic-span2'>Get your first 3 months for ₹20/mo</header>
                 <div className='card2'>
                    <h3 className='card-title5'>What's included on Basic</h3>
                    <ul className='card-list'>
                        <li className='li-name'>Basic reports</li>
                        <li className='li-name'>Up to 1,000 inventory locations</li>
                        <li className='li-name'>2 staff accounts</li>
                        
                    </ul>
                    <div className='card-button-cont'>
                        <button className='card-button'>Try for free</button>
                    </div>   
                 </div>
              </Col>
              <Col md={3} className='basic-card shadow m-4 pr-2'>
                 <div className='d-none d-md-block' id='section2'>
                    <h1 className='card-title1'>Shopify</h1>
                    <h2 className='card-title2'>FOR SMALL BUSINESSES</h2>
                    <p className='card-title3'>Level up your business with professional reporting and more staff accounts</p>
                    <h3 className='card-title4'><span className='basic-span1'>₹7,447</span>INR/mo</h3>
                 </div>
                 <h3 className='smcard-title d-md-none'><span className='smbasic-span'>₹7,447</span>INR/mo</h3>
                 <header className='basic-span2'>Get your first 3 months for ₹20/mo</header>
                 <div className='card2'>
                    <h3 className='card-title5'>What's included on Shopify</h3>
                    <ul className='card-list'>
                        <li className='li-name'>Professional reports</li>
                        <li className='li-name'>Up to 1,000 inventory locations</li>
                        <li className='li-name'>5 staff accounts</li>
                        
                    </ul>
                    <div className='card-button-cont'>
                        <button className='card-button'>Try for free</button>
                    </div>   
                 </div>
              </Col>
              <Col md={3} className='basic-card shadow m-4 pr-2'>
                 <div className='d-none d-md-block' id='section3'>
                    <h1 className='card-title1'>Advanced</h1>
                    <h2 className='card-title2'>FOR MEDIUM TO LARGE BUSINESSES</h2>
                    <p className='card-title3'>Get the best of Shopify with custom reporting and our lowest transaction fees</p>
                    <h3 className='card-title4'><span className='basic-span1'>₹30,164</span>INR/mo</h3>
                 </div>
                 <h3 className='smcard-title d-md-none'><span className='smbasic-span'>₹30,164</span>INR/mo</h3>
                 <header className='basic-span2'>Get your first 3 months for ₹20/mo</header>
                 <div className='card2'>
                    <h3 className='card-title5'>What's included on Advanced</h3>
                    <ul className='card-list'>
                        <li className='li-name'>custom report builder</li>
                        <li className='li-name'>Up to 1,000 inventory locations</li>
                        <li className='li-name'>15 staff accounts</li>
                        
                    </ul>
                    <div className='card-button-cont'>
                        <button className='card-button'>Try for free</button>
                    </div>   
                 </div>
              </Col>
            </Row>
        </Container>
  )
}

export default Card