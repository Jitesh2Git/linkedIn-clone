import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "India's top 25 companies this year",
        "Top news - 8,376 readers"
      )}
      {newsArticle("IT firms see leadership churn", "23h ago - 1,054 readers")}
      {newsArticle(
        "India's top 25 companies this year",
        "1d ago - 6,044 readers"
      )}
      {newsArticle(
        "Smaller cities tap into e-mobolity",
        "1d ago - 1,281 readers"
      )}
      {newsArticle(
        "Indian healthcare talent in demand",
        "1d ago - 584 readers"
      )}
    </div>
  );
}

export default Widgets;
