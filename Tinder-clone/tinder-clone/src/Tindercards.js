import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from '@mui/material';

function Tindercards() {
  const [people, setPeople] = useState([
    
   
    
    
    {
          name: 'Luiz Diaz',
          url: 
          "https://i2-prod.liverpoolecho.co.uk/incoming/article23687076.ece/ALTERNATES/s1200c/0_GettyImages-1239962430.jpg"
      },

      {
        name: 'Ibrahim Konate',
        url: 
        "https://www.thisisanfield.com/wp-content/uploads/2021-11-24-080-Liverpool_Porto.jpg"
    },

    {
        name: 'Fabinho',
        url: 
        "https://editorial.uefa.com/resources/0274-14d1bb549c0f-74344d0b2f4e-1000/chelsea_v_liverpool_-_carabao_cup_final.jpeg"
    },

    {
        name: 'Roberto Firmino',
        url: 
        "https://www.si.com/.image/t_share/MTg3NTE0OTkyNjY3NDA0MTc1/imago1009955223h.jpg"
    },

    {
        name: 'Alisson Becker',
        url: 
        "https://i.guim.co.uk/img/media/654f9c7d57500ac5f719d458dd8942e379b3e536/0_99_4076_2447/master/4076.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=feefc38a958b858cbb77b2fb2aa6e3be"
    },

    {
        name: 'Mo Salah',
        url: 
        "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt09d93f4be9e7a8c1/627cbd14a5a9cd0da58db0c1/salahhh.png"
    },

    {
        name: 'Trent Alexander-Arnold',
        url: 
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_2626,h_1477,x_0,y_302/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/dbltap_en_international_web/01fpjk8chxfn49kn6z98.jpg"
    },

    {
        name: 'Sadio Mane',
        url: 
        "https://dailypost.ng/wp-content/uploads/2022/02/Sadio-Mane.jpg"
    },

    {
        name: 'Jurgen Klopp',
        url: 
        "https://i.guim.co.uk/img/media/7d8e161c1b474f6ade2097a57a0ba2f839b2fa33/0_287_5564_3338/master/5564.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=b734ed12ab345d97a53916234fba3adc"
    },


  ]);

  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      //setLastDirection(direction);
  };

  const outOfFrame = (name) => {
      console.log(name + " left the screen!" );
  };

  return (
    <div className='tinderCards'>
        <div className='tinderCards_cardContainer'>
        {people.map((person) => (
           <TinderCard 
           className='swipe'
           key={person.name}
           preventSwipe={["up", "down"]}
           onSwipe={(dir) => swiped(dir, person.name)}
           onCardLeftScreen={() => outOfFrame(person.name) }
           >
             <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
             >
                <h3>{person.name}</h3>
            </div>


           </TinderCard> 
        ))}
        </div>
    </div>
  )
}

export default Tindercards