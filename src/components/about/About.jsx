import React from 'react'
import "./about.css"
import Award from"../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
            </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I design & build digital products....
        </p>
        <p className="a-desc">
          Hii,
I am a graduate from Conestoga college of Applied Computer Science & Information Technology,
 I am a web developer and tech enthusiast seeking to learn more and more each day. I have experience in web developing and designing,
  Android application development, graphic designing and animation/illustration on multiple tools.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Best cusomer service award 2021</h4>
            <p className="a-award-desc">
              I have been awarded and rewarded for best in class customer service satisfaction
            </p>
          </div>
        </div>
        </div>

        </div>
    )
}

export default About
