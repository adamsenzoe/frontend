import { Card, Col, Container, Row,Image } from 'react-bootstrap';
//import cardimage1 from "../assets/images/1_greenbull.jpg";

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage1'>
        <Image src="/1_greenbull.jpg" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> One Piece : Ryokugyu Shippuden </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
      </Card>
      </Col>
      
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage2'>
         <Image src='/3.jpg' alt="card image 2"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> One Piece : Red Film </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       </Card>
       </Col>

       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage3'>
         <Image src="/3_saitama.jpg" alt="card image 3"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> Saitama : The Final Battle</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       </Card>
       </Col>

       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage4'>
         <Image src="/4_gokubeerus.jpg" alt="card image 4"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> Dragon Ball : Battle of Gods </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       </Card>
       </Col>

       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage1'>
        <Image src="/5_naruto.jpg" alt="card image 5"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> Naruto : Goodbye kurama </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
      </Card>
      </Col>

      <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage1'>
        <Image src="/trending1.jpg" alt="card image 6"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> Naruto : The Last Movie </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
      </Card>
      </Col>

       

   </Row>
</Container>

   )
}
export default Trending
