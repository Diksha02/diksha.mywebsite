import React from "react";

function MiddleContainer() {
  return (
    <div class="middle-container">
      <div class="profile">
        <img
          class="profile-pic"
          src="https://image.flaticon.com/icons/svg/434/434999.svg"
          alt="profile-img"
          height="200"
          width="200"
        />
        <h2>Hello.</h2>
        <p>
          I am a Computer Engineering undergraduate studying at RAIT, Nerul. I
          love music and I like to learn about new things and people.
        </p>
      </div>
      <hr />
      <div className="skills">
        <h2>My Skills.</h2>
        <div className="skill-row">
          <img
            class="programming"
            src="https://image.flaticon.com/icons/png/512/2905/2905977.png"
            alt="computer-img"
          />
          {/* <Avatar img="https://image.flaticon.com/icons/png/512/2905/2905977.png" /> */}
          <h3>Programming</h3>
          <p>
            Programming is my passion and I have knowledge of programming
            languages such as Python, Javascript and Java. My keen interest is
            in solving problems and automating tasks which take too much time.
          </p>
        </div>
        <div className="skill-row">
          <img
            className="music"
            src="https://image.flaticon.com/icons/svg/2904/2904780.svg"
            alt="headphone-img"
          />
          {/* <Avatar img="https://image.flaticon.com/icons/svg/2904/2904780.svg" /> */}
          <h3>Music</h3>
          <p>
            I love listening to music in my free time and some of my favourite
            artists are Panic! at the Disco, My Chemical Romance and
            Greenday.I'm a big fan of early 2000's rock music particularly right
            now!
          </p>
        </div>
      </div>
      <hr />
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <h3>If you love rock music as much as I do.</h3>
        <p className="contact-me-msg">
          Share my love for early 2000's rock music and programming? We can talk
          about the early 2000s rock records and also share about our
          programming preferences & knowledge!
        </p>
        <a className="btn" href="mailto:nigamdiksha02@gmail.com">
          CONTACT ME
        </a>
      </div>
    </div>
  );
}

export default MiddleContainer;
