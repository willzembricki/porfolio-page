import myself from "../images/Myself.png";
function About() {
  return (
    <div>
      <h1>William Zembricki's Personal Page</h1>
      <h2>About Me</h2>
      <p>
        Hey What up its your boy will. Love some kick boxing love some coding
        big boy moves only.
      </p>
      <img src={myself} alt="Myself" id="myself" />
    </div>
  );
}
export default About;
