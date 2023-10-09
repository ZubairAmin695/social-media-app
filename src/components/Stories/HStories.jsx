import React from "react";

import './story.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import StoriesData from "../../FakeApis/StoriesData";
import UserStory from "./UserStory";

const HStories = () => {
  return (
    <div className="stories">
      <UserStory />

      <Swiper style={{ width: "80%" }} slidesPerView={4} spaceBetween={10}>
        {StoriesData.map((story) => (
          <SwiperSlide>
            <div className="story" key={story.id}>
              <div className="user">
                <img src={story.storyProfile} alt="" />
              </div>
              <img src={story.story} alt="" />
              <h5>
                {story.name}
              </h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HStories;
