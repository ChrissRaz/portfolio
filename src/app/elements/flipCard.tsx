
const FlipCard = (props) => {
  return (
    <div className="flip">

      <div className="front bg-[url('/images/portfolio/e-commerce.png')] bg-center bg-no-repeat  bg-clip-content">
        <h1 className="text-shadow">{ props.name + '('+props.type +')'} </h1>
      </div>

      <div className="back">
        <h2>Yohali Art (Site e-commerce)</h2>
        <p>
          Good tools make application development quicker and easier to maintain
          than if you did everything by hand.   .
        </p>
      </div>

    </div>
  );
};

export default FlipCard;
