import React from "react";
import "./Trello.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../Assets/img1.webp";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.webp";
import Card from "../Card/Card";
function Trello() {

  const obj = {
    '1' : img1,
    '2': img2,
    '3':img3
  }


  return (
    <div className="trello center">
      <div className="cont">
        <div className="top">
          <div className="same">TRELLO 101</div>
          <div style={{ fontSize: "2.5rem", fontWeight: "700" }}>
            A productivity powerhouse
          </div>
          <div className="same">
            Simple, flexible, and powerful. All it takes are boards, lists, and
            cards to get a clear view of who’s doing what and what needs to get
            done. Learn more in our guide for getting started.
          </div>
        </div>
        <div className="bottom">
          <div className="left" >
            <Card
              title={`Boards`}
              desc={`Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”"`}
            />
            <Card
              title={`Lists`}
              desc={`The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.`}
            />
            <Card
              title={`Cards`}
              desc={`Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.`}
            />
          </div>
          {/* <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                style={{ border: "1px solid blue" }}
              >
                <img class="d-block w-50" src={img1} alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-50" src={img2} alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-50" src={img3} alt="Third slide" />
              </div>
              <div class="carousel-item">
                <img src="..." alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>heading</h5>
                  <p>jsfdkjd</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Trello;
