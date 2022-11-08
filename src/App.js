import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h><b>Home Page</b></h>
        <p>
        <hr></hr>
        <Text style={styles.text}>
         I’m Khayelihle Msimango, from Gauteng. I completed matric at Mkhaliphi high school from KZN. I graduated for both the diploma in ICT/Applications development and have recently graduated for the advanced diploma in ICT at DUT early 2022. I am punctual, dependable and can be counted upon to finish what I start. In my 2nd year, I was recognized with an achievement of excellence award by the dean in recognition for best performance student from the department of IT at the DUT. 
          In five years, I see myself here at <b>SovTech</b> company, contributing to the team and adding value for the branch. I love that you offer so many opportunities for professional development and I want to grow with the company. Hence, it’s a great privilege for anyone to work in a reputed company. When I read about the <b>SovTech</b> company, I found that my skills are matching their requirements where I can showcase my technical skills to contribute to the company growth.
        
          I want to be a <b>SovTech </b>software developer because I have worked hard to develop skills that are relevant to this industry and because this type of work brings me personal satisfaction. I possess all the skills and experience that you are looking for.
         </text>
        </p>

        <hr></hr>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
