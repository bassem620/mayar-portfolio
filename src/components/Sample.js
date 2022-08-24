const Sample = ({title, link, body}) => {
  return (
    <div className="sample mt-3">
    <span className='d-block text-light fs-5 fw-bold'>{title}</span>
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      className='fs-5'
    >
      {body}
    </a>
  </div>
  );
}

export default Sample;