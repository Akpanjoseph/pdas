import 'bulma/css/bulma.css'
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <div className='container'>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      
      
      <div className="section">
        <div className="columns">

          <div className="column is-4">
          <ProfileCard title="Alexa" handle="@alexa99" imageUrl={'images/alexa.png'} imageAlt="Alexa image" description="Cortana was made by Microsoft , who knows what it does?" />
          </div>

          <div className="column is-4">
          <ProfileCard title="Cortana" handle="@cortana32" imageUrl={'images/cortana.png'} imageAlt="cortana image" description="siri was made by apple and is being phased out" />
          </div>

          <div className="column is-4">
          <ProfileCard title="siri" handle="@siri01" imageUrl={'images/siri.png'} imageAlt="siri image" description='hello' />
          </div>
        </div>
      </div>
      
      
     
     
    </div>
  );
}

export default App;
