import suro from "../images/SuroMainPage.png";
import crimereporter from "../images/CrimeReporterMainPage.png";

function LinkCards() {
  return (
    <>
      <div id="suro" className="card">
        <h3 className="projecttitle">
          <a
            className="projecttitle"
            href="https://squareupandroundout.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Square Up and Round Out
          </a>
        </h3>
        <img
          className="projectpic"
          id="suroimg"
          src={suro}
          alt="mainpage screenshot"
        />
        <div id="suroinfo">
          <p className="projectabout">
            A tab collector for a night out with your friends. Keeps track of
            how much everyone has spent and how much is owed to even out the
            bill. User adds who got the round and how much it was and the app
            takes care of the rest.
          </p>
          <ul className="technicalinfo">
            <li> React Frontend</li>
            <li> Ruby Backend</li>
          </ul>
        </div>
      </div>

      <div id="crimereporter" className="card">
        <h3 className="projecttitle">
          <a
            className="projecttitle"
            href="https://crime-reporter.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Crime Reporter
          </a>
        </h3>
        <img
          className="projectpic"
          id="crimereporterimg"
          src={crimereporter}
          alt="mainpage screenshot"
        />
        <div id="crimereporterinfo">
          <p className="projectabout">
            A visual display of arrest records obtained from the FBI crime data
            database. Allows the user to plot multiple states drug related
            charges over time. The graph is additive and has no limit to the
            number of lines able to be shown. User selects State and Crime they
            want to display. After selection is made "Get the graph" is clicked
            and the graph populates. Individual data points show direct values.
          </p>
          <ul className="technicalinfo">
            <li> React Frontend</li>
            <li> Ruby on Rails Backend</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default LinkCards;
