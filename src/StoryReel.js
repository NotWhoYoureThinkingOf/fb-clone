import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import story1 from "./assets/facebook-story-1.jpg";
import icon1 from "./assets/facebook-story-icon-1.jpg";
import story2 from "./assets/facebook-story-2.jpg";
import icon2 from "./assets/facebook-story-icon-2.jpg";
import story3 from "./assets/facebook-story-3.jpg";
import icon3 from "./assets/facebook-story-icon-3.jpg";
import story4 from "./assets/facebook-story-4.jpg";
import icon4 from "./assets/facebook-story-icon-4.jpg";
import story5 from "./assets/facebook-story-5.jpg";
import icon5 from "./assets/facebook-story-icon-5.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={story1} profileSrc={icon1} title="August Burns Red" />
      <Story image={story2} profileSrc={icon2} title="Guitar Center" />
      <Story image={story3} profileSrc={icon3} title="Carnivora" />
      <Story image={story4} profileSrc={icon4} title="5-Minute Crafts" />
      <Story image={story5} profileSrc={icon5} title="Gibson" />
    </div>
  );
}

export default StoryReel;
