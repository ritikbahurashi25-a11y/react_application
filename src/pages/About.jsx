import "./Pages.css";

export default function About() {
  return (
    <div className="page-container">
      <div className="content-card">
        <h1 className="title">About Me</h1>

        <h3>👤About my_self</h3>
        <p>
          I'm Ritik Bahurashi, an MCA student at SPIT Mumbai 442001.
        </p>

        <h3>🎓 Education Details</h3>

        <div className="edu-box">
          <h4>Master of Computer Applications (MCA)</h4>
          <p>Sardar Patel Institute of Technology, Mumbai</p>
          <p>Expected Graduation: 2027</p>
        </div>

        <div className="edu-box">
          <h4>Bachelor’s in Computer Science</h4>
          <p>Jankidevi Bajaj College of Science</p>
          <p>CGPA: 7.14</p>
        </div>
      </div>
    </div>
  );
}
