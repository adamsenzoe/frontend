import { Container, Row,Col,Button } from 'react-bootstrap';

const Intro = (props) => {
   return(

<div className='intro'>
         <Container className='text-light d-flex justify-content-center align-items-center border text-center'>
           <Row>
             <Col>
                 <div className='title'>Review Film</div>
                 <div className='title'>Kesukaanmu</div>
                 <div className='introButton mt-4 text-center'>
                     <Button variant='light' onClick={props.scroll}>Lihat Review</Button>
                 </div>
             </Col>
           </Row>
         </Container>
</div>
   )
}
export default Intro

