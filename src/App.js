import React, { useState } from "react";
import "./App.css";
import Greetings from "./components/greetings";
import Section from "./components/section";
import LoginFormClass from "./components/loginFormClassComp";

function App() {
  
  return (
    <div className="main-container">
      <div className="first-container">
        <div id="top" className="item">
          <h1> Heading</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div id="app-container" className="item">
          <Section headerText="Heading">
            <Greetings />
          </Section>

          <Section headerText="Heading">
            <LoginFormClass />
          </Section>

          <Section headerText="Ultra Mega Super Long Heading">
            <LoginFormClass />
          </Section>
        </div>
      </div>

      <div className="second-container">
        <div id="bottom" className="item">
          <h1> Heading</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2>Heading</h2>
        </div>

        <div id="app-container" className="item">
          <Section headerText="Heading">
            <Greetings />
          </Section>

          <Section headerText="Heading">
            <LoginFormClass />
          </Section>

          <Section headerText="Ultra Mega Super Long Heading">
            <LoginFormClass />
          </Section>
        </div>
      </div>
    </div>
  );
}

export default App;

