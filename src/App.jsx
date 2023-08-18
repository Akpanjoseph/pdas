import 'bulma/css/bulma.css'
import React from 'react';
import ProfileCard from './ProfileCard';

const App = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa99" imageUrl={'images/alexa.png'} imageAlt="Alexa image" />
      <ProfileCard title="Cortana" handle="@cortana32" imageUrl={'images/cortana.png'} imageAlt="cortana image" />
      <ProfileCard title="siri" handle="@siri01" imageUrl={'images/siri.png'} imageAlt="siri image" />
    </div>
  );
}

export default App;
