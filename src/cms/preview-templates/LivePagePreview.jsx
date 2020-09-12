import React from "react";
import PropTypes from "prop-types";
import { LivePageTemplate } from "../../templates/live-page";

const LivePagePreview = ({ entry, getAsset }) => {

  return (
    <LivePageTemplate
    urlLive={getAsset(entry.getIn(["data", "urlLive"]))}
      title={entry.getIn(["data", "title"])}
      heading={entry.getIn(["data", "heading"])}
      description={entry.getIn(["data", "description"])}
    />
  );
};

LivePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default LivePagePreview;
