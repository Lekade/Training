import React from 'react';
import './App.css';
import {Card} from "./styles/components/Card.styled";
import {SectionCards} from "./styles/components/SectionCards.styled";
import {CardImage} from "./styles/components/CardImage.styled";
import image from "./images/Rectangle.png"
import {CardInfo} from "./styles/components/CardInfo.styled";


function App() {
  return <div className="wrapper">
    <SectionCards>
      <Card>
        <CardImage src={image}/>
        <CardInfo>
          <h1>Headline</h1>
          <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
          {/*<a href={"#"} className="seeMore">see more</a>*/}
          <button>save</button>
        </CardInfo>
      </Card>
    </SectionCards>
  </div>
}

export default App;

