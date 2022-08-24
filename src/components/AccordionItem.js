const AccordionItem = ({ heading, link, duration, body, id }) => {
  return (
    <div className="accordion-item" key={id}>
      <h2 className="accordion-header" id={"heading-" + id}>
        <button
          className="accordion-button bg-light text-main"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse-" + id}
        >
          {heading}
        </button>
      </h2>
      <div id={"collapse-" + id} className={"accordion-collapse collapse"}>
        <div className="accordion-body">
          <strong>{duration}</strong>
          <br />
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          )}
          {link && <br />}
          {body.map((ele, ind) => {
            return (
              <span key={ind}>
                {ele}
                <br />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
