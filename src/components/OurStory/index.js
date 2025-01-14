import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import "./our-story.css";
import ourStoryMessages from '../messages/ourStory';
import HeroImage from "../Hero-Image";


const OurStory = ({lang}) => {
  return (
    <Fragment>
      <Helmet>
        <title>Chevitas Bagels - Our Story</title>
      </Helmet>
      <HeroImage page="ourStory"/>
      <div className="our-story">
        <main>
          <h1>{ourStoryMessages.storyTitle.message[lang]}</h1>
          {Object.keys(ourStoryMessages).map((storyText, i) => i !== 0 && <p key={i}>{ourStoryMessages[storyText].message[lang]}</p>)}
        </main>
      </div>
    </Fragment>
  )
}

export default OurStory
