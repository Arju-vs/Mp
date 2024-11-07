// rafce
import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music.gif'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      {/* landing part */}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App wll allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, lets starts enjoying our site!!!</p>
          <Link to={'/home'} className='btn btn-info'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="" />
        </div>
      </div>
      {/* features part */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={p1} />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
              Users can upload, view and remove the videos.
              </Card.Text>
            </Card.Body>
         </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={p2} />
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
              Users can categorise the videos by drag and drop feature.
              </Card.Text>
            </Card.Body>
         </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={p3} />
            <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
              Users can manage the watch history of all videos.
              </Card.Text>
            </Card.Body>
         </Card>
          </div>
        </div>
      </div>
      {/* last part */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, perspiciatis, non ipsum totam. </p>
            <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder text-warning'>Categorise Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, perspiciatis, non ipsum totam. </p>
            <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, perspiciatis, non ipsum totam. </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/tOM-nWPcR4U?si=GZUglu0AAi79dlJD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing