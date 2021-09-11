import myself from "../images/Myself.png";
function About() {
  return (
    <div className="about">
      <h1 id="maintitle">William Zembricki's Portfolio Page</h1>

      <h3 id="fullstack">FULL STACK ENGINEER</h3>
      <p id="summary">
        Experienced in Ruby on Rails and JavaScript based programming and a
        background in Biomedical Engineering. Possess strong skills in
        collaborative teamwork and leadership skills. Detailed oriented problem
        solver with well-honed organizational skills.
      </p>
      <ul id="skilllist">
        <li>
          Programming Languages: Ruby |Ruby on Rails | Javascript | React |
          MatLab | Simulink | Opti Motion Tracking
        </li>
        <li>
          Soft Skills: Public Speaking, Team-Leadership, Decision Making,
          Effective Communicator (Technical and Non-Technical)
        </li>
        <li>Computer Drawing: Solidworks and Creo 3.0 </li>
      </ul>
      <img src={myself} alt="Myself" id="myself" />
    </div>
  );
}
export default About;
