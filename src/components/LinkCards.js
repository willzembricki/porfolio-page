import suro from "../images/SuroMainPage.png";
import crimereporter from "../images/CrimeReporterMainPage.png";

function LinkCards() {
  return (
    <div id="suro">
      <h3>
        <a
          href="https://squareupandroundout.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Square Up and Round Out
        </a>
      </h3>
      <img id="suroimg" src={suro} alt="mainpage screenshot" />

      <ul>
        <p>
          A tab collector for a night out with your friends. Keeps track of how
          much everyone has spent and how much is owed to even out the bill.
          USer adds who got the round and how much it was and the app takes care
          of the rest.
        </p>
        <p> React Frontend</p>
        <p> Ruby Backend</p>
      </ul>
      <div id="crimereporter">
        <h3>
          <a
            href="https://crime-reporter.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Crime Reporter
          </a>
        </h3>
        <img
          id="crimereporterimg"
          src={crimereporter}
          alt="mainpage screenshot"
        />

        <ul>
          <p>
            A visual display of arrest records obtained from the FBI crime data
            database. Allows the user to plot multiple states drug related
            charges over time. The graph is additive and has no limit to the
            number of lines able to be shown. User selects State and Crime they
            want to display. After selection is made "Get the graph" is clicked
            and the graph populates. Individual data points show direct values.
          </p>
          <p> React Frontend</p>
          <p> Ruby on Rails Backend</p>
        </ul>
      </div>
    </div>
  );
}
export default LinkCards;
