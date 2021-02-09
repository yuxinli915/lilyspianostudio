import React from "react";

export default function Portfolio(props) {
  if (props.data) {
    var certificates = props.data.certificates.map((certificate) => {
      var cImage = "image/portfolio/" + certificate.image;
      return (
        <div key={certificate.title} className="columns portfolio-item">
          <div className="item-wrap">
            <img alt={certificate.title} src={cImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{certificate.title}</h5>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <h1>Certificates</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {certificates}
        </div>
      </div>
    </section>
  );
}
