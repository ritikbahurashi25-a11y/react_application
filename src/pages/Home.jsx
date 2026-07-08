import "./Pages.css";

export default function Home() {
  return (
    <div className="page-container">
      <div className="hero-card">

        <h1>Hi, I'm <span className="highlight">Ritik Bahurashi</span></h1>
         <h3 class="center-text"> MCA Student | Full Stack Developer</h3>
        

        <p>
          Passionate about building innovative solutions.Currently pursuing MCA at SPIT Mumbai.
        </p>

        <div className="button-row">
          <button className="btn-primary">Get In Touch</button>
          <button className="btn-outline">Learn More</button>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <h2>5+</h2>
            <p>Projects Completed</p>
          </div>

         

          <div className="stat-box">
            <h2>100%</h2>
            <p>Ready To Learn</p>
          </div>
        </div>
      </div>
    </div>
  );
}
