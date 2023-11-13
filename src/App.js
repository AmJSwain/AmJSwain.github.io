// App.js

import React from 'react';

import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Unlock Your Potential in Software Engineering!</h1>
      </header>
      <section className="content">
       
        <div className="text-content">
          <h2>
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            TechNex - Empowering Future Developers
          </h2>
          <p>
            <span role="img" aria-label="world">
              🌐
            </span>{' '}
            Dive into the World of Programming: Learn from Actively Working Professionals
          </p>
          <h3>
            <span role="img" aria-label="lightbulb">
              💡
            </span>{' '}
            Why Choose Us?
          </h3>
          <ul>
            <li>Comprehensive Curriculum</li>
            <li>Hands-On Projects</li>
            <li>Real-World Coding Challenges</li>
            <li>Expert Mentors</li>
            <li>Industry-Relevant Skills</li>
            <li>Internship Opportunities</li>
            <li>Guaranteed Job Placement</li>
          </ul>
          <p>
            <span role="img" aria-label="laptop">
              👩‍💻
            </span>{' '}
            Build Your Future: From Basics to Advanced, Master the Skills Employers Seek.
          </p>
        </div>
      </section>
      
      <footer>
        <p>
          <span role="img" aria-label="calendar">
            📆
          </span>{' '}
          Enroll Now! Classes Starting Soon. Limited Seats!
        </p>
        <p>Contact : TechNex@gmail.com</p>
      </footer>
    </div>
  );
};

export default App;
