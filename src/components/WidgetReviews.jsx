import React, { Component } from "react";

class WidgetReview extends Component {
  componentDidMount() {
    (function(d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/aht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialWidgetScript");
  }

  render() {
    return (
      <div className="embedsocial-widget" data-ref="c6355d9be5de3780af61509a1beaa75a">
      </div>
    );
  }
}

export default WidgetReview;