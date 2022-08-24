import Card from 'react-bootstrap/Card';

const cardBox = ({title, text}) => {
  return (
    <Card className='bg-main text-light col-md-4 col-lg-3' >
      <Card.Body>
        <Card.Title className='py-5 fs-4 text-center'>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default cardBox;
