import React from 'react';
import {SectionCards} from "../../styles/components/SectionCards.styled";
import {Card} from "../../styles/components/Card.styled";
import {CardImage} from "../../styles/components/CardImage.styled";
import image from "../../images/Rectangle.png";
import {CardInfo} from "../../styles/components/CardInfo.styled";
import {Button, ButtonLink} from "../../styles/components/Button.styled";

const Cards = () => {
    return (
        <SectionCards>
            <Card>
                <CardImage src={image}/>
                <CardInfo>
                    <h1>Headline</h1>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                    <ButtonLink as="a" href={"#"} className="seeMore">see more</ButtonLink>
                    <Button>save</Button>
                </CardInfo>
            </Card>
            <Card>
                <CardImage src={image}/>
                <CardInfo>
                    <h1>Headline</h1>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                    <ButtonLink as="a" href={"#"} className="seeMore">see more</ButtonLink>
                    <Button>save</Button>
                </CardInfo>
            </Card>
            <Card>
                <CardImage src={image}/>
                <CardInfo>
                    <h1>Headline</h1>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
                    <ButtonLink as="a" href={"#"} className="seeMore">see more</ButtonLink>
                    <Button>save</Button>
                </CardInfo>
            </Card>
        </SectionCards>
    );
};

export default Cards;