import React,{ useState} from 'react';
import "./TindrCards.css";
import TinderCard from "react-tinder-card"


function TindrCards() {
    const [people,setPeople]=useState([
        {
            name:'Elon Musk',
            url:'https://i.insider.com/63849e58b4cf0100187db07d?width=1136&format=jpeg'
        },
        {
            name:'Spidermans',
            url:'https://media.gq-magazine.co.uk/photos/63468efef4f48bee2acb7062/master/pass/Tom-Holland-Spiderman-what-we-know-so-far.jpg'
        },
    ]);

    const swiped = (direction, nameToDelete)=>{
        console.log("removing:"+nameToDelete);
    }

    const outOfFrame=(nameOfPerson)=>{
        console.log("left:"+nameOfPerson)
    }

  return (
    <div className='tinderCard'>
        <div className='cardContainer'>
            {
                people.map(person=>(
                    <TinderCard className='swipe' key={person.name} preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}>
                        
                        <div style={ {backgroundImage: "url("+person.url+")"}}
                        className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))
            }
        </div>
    </div>
  )
}

export default TindrCards