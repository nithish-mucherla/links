import React from "react";
import LinkItem from "./linkItem/linkItem";

function LinkContainer() {
  const links = [
    {
      text: `click to - 'Opiniate': share your thoughts anonymously!`,
      link: "https://www.nithish-mucherla.tech/Opiniate",
    },
    {
      text: "Portfolio",
      link: "https://www.nithish-mucherla.tech",
    },
    {
      text: "Notes App",
      link: "https://www.nithish-mucherla.tech/notes",
    },
    {
      text: "typeIt- typing speed test app",
      link: "https://www.nithish-mucherla.tech/typeIt",
    },
  ];
  return (
    <div className="container column center">
      {links.map((i) => (
        <LinkItem linkText={i.text} key={i.link} link={i.link} />
      ))}
      <div className="container center">
        <div>
          <a href="https://www.facebook.com/nithu.mucherla" rel="noopener">
            <i
              className="fa fa-facebook-square"
              style={{
                fontSize: "30px",
                color: "rgb(66,66,66)",
                padding: "5px",
              }}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/sai-nithish-mucherla"
            rel="noopener"
          >
            <i
              className="fa fa-linkedin-square"
              style={{
                fontSize: "30px",
                color: "rgb(66,66,66)",
                padding: "5px",
              }}
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/nithish-mucherla" rel="noopener">
            <i
              className="	fa fa-github"
              style={{
                fontSize: "30px",
                color: "rgb(66,66,66)",
                padding: "5px",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LinkContainer;
