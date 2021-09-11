import linkedin from "../images/Linkedin-Logo.png";
function ContactInfo() {
  // talk to zach about making this pretty
  return (
    <div>
      <h1>Contact Info</h1>
      <h3>Email: wzembricki@gmail.com</h3>
      <h3>Mobile Phone: (732) 535-2812</h3>
      <a
        href="https://www.linkedin.com/in/william-zembricki/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkedin}
          alt="linkedin icon"
          height="50px"
          width="80px"
        ></img>
      </a>
    </div>
  );
}
export default ContactInfo;
