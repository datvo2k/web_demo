import "./intro.css";
import Nothing from "../../img/nothing.jpg"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Đạt Võ</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Backend Developer</div>
              <div className="i-title-item">Devops Engineer</div>
              <div className="i-title-item">Linux System Administration</div>
            </div>
          </div>
          <p className="i-desc">print("Hello world!")</p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_1">
              <path
                id="Vector_2"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Nothing} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
