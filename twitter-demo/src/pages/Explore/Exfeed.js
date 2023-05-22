import React, { useState } from "react";
import "./Exfeed.css";
import Trending from "../Home/Trending";
import FlipMove from "react-flip-move";
function Exfeed() {
  const [buttonClicked, setButtonClicked] = useState(1);

  const handleClick = (id) => {
    setButtonClicked(id);
  };
  return (
    <div className="exfeed">
      <div className="top">
        <div className="searchh">
          <input
            type="text"
            autocomplete="off"
            name="text"
            class="inputt"
            placeholder="Search Twitter"
          ></input>
        </div>
        <div className="cat">
          <button
            className={`btnp ${buttonClicked === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            For you
          </button>
          <button
            className={`btnp ${buttonClicked === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            Trending
          </button>
          <button
            className={`btnp ${buttonClicked === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            News
          </button>
          <button
            className={`btnp ${buttonClicked === 4 ? "active" : ""}`}
            onClick={() => handleClick(4)}
          >
            Sports
          </button>
          <button
            className={`btnp ${buttonClicked === 5 ? "active" : ""}`}
            onClick={() => handleClick(5)}
          >
            Entertainment
          </button>
        </div>
      </div>

      {buttonClicked === 1 && (
        <div
          className={`exx ${buttonClicked ? "visible" : "hidden"}`}
          id="div-1"
        >
          <FlipMove>
            <Trending head="Trending in India" tag="Winner - CSK" tweet=" " />
          </FlipMove>

          <Trending
            head="Technology · Trending"
            tag="iOS 17"
            tweet="1,005 Tweets"
          />
          <Trending head="Trending in India" tag="#GPay" tweet=" " />
          <Trending
            head="Technology · Trending"
            tag="#WhatsApp"
            tweet="8,304 Tweets"
          />
          <Trending head="Trending in India" tag="#IASTransfer" tweet=" " />
          <Trending
            head="Events · Trending"
            tag="#maharanapratapjayanti"
            tweet="18K Tweets"
          />
          <Trending head="Trending in India" tag="Arnab" tweet=" " />
          <Trending head="Trending" tag="#bgmiunban" tweet="1,577 Tweets" />
          <Trending
            head="Trending in India"
            tag="इस्लामिक राष्ट्र"
            tweet="3,125 Tweets"
          />
          <Trending
            head="Sports · Trending"
            tag="Ashwin"
            tweet="6,467 Tweets"
          />
          <Trending head="Trending in India" tag="Lichi" tweet="1,700 Tweets" />
          <Trending
            head="Technology · Trending"
            tag="iOS 17"
            tweet="1,020 Tweets"
          />
          <Trending
            head="Trending in India"
            tag="चित्रा त्रिपाठी"
            tweet="12.6K Tweets"
          />
          <Trending
            head="Trending in India"
            tag="#BBCDocumentary"
            tweet="3,998 Tweets"
          />
        </div>
      )}

      {buttonClicked === 2 && (
        <div
          className={`exx ${buttonClicked ? "visible" : "hidden"}`}
          id="div-2"
        >
          <h2 className="ind">India trends</h2>
          <Trending
            head="1 · Cricket · Trending"
            tag="#RCBvGT"
            tweet="44.1K Tweets "
          />
          <Trending
            head="2 · Trending"
            tag="God Kabir Prakat Diwas"
            tweet="253K Tweets "
          />
          <Trending
            head="3 · Events · Trending"
            tag="#maharanapratapjayanti"
            tweet="18.1K Tweets "
          />
          <Trending
            head="4 · Entertainment · Trending"
            tag="#SarathBabu"
            tweet="11.6K Tweets "
          />
          <Trending
            head="5 · Trending"
            tag="#ViratKohli𓃵"
            tweet="24.2K Tweets "
          />
          <Trending
            head="6 · Trending"
            tag="पापुआ न्यू गिनी"
            tweet="39K Tweets "
          />
          <Trending
            head="7 · Politics · Trending"
            tag="#G20Kashmir"
            tweet="51.6K Tweets "
          />
          <Trending
            head="8 · Trending"
            tag="महाराणा प्रताप"
            tweet="71.3K Tweets "
          />
          <Trending
            head="9 · Cricket · Trending"
            tag="Gill"
            tweet="97.6K Tweets "
          />
          <Trending head="10 · Trending" tag="संसद भवन" tweet="27.1K Tweets " />
          <Trending
            head="11 · Trending"
            tag="महान समाज"
            tweet="11.8K Tweets "
          />
          <Trending
            head="12 · Football · Trending"
            tag="Neymar"
            tweet="50.8K Tweets"
          />
          <Trending
            head="13 · Trending"
            tag="ब्रह्म समाज"
            tweet="7,679 Tweets "
          />
          <Trending
            head="14 · Sports · Trending"
            tag="Bring GG To KKR"
            tweet="5,590 Tweets "
          />
          <Trending
            head="15 · Politics · Trending"
            tag="Fiji"
            tweet="37.5K Tweets "
          />
        </div>
      )}

      {buttonClicked === 3 && (
        <div
          className={`exx ${buttonClicked ? "visible" : "hidden"}`}
          id="div-3"
        >
          <Trending head="Trending" tag="#WhatsApp" tweet="7,966 Tweets " />
          <Trending
            head="Trending"
            tag="#YSRCPAgain2024"
            tweet="168K Tweets "
          />
          <Trending
            head="Trending in Business & finance"
            tag="#BitcoinPizzaDay2023"
            tweet="53.5K Tweets "
          />
          <Trending
            head="Technology · Trending"
            tag="iOS 17"
            tweet="1,018 Tweets "
          />
          <Trending
            head="Business & finance · Trending"
            tag="#AdaniGroup"
            tweet="2,179 Tweets "
          />
          <Trending
            head="Trending in India"
            tag="Karnataka"
            tweet="77.1K Tweets "
          />
          <Trending
            head="Trending in Technology"
            tag="#SmartCity"
            tweet="1,772 Tweets "
          />
          <Trending
            head="Trending in Politics"
            tag="Pentagon"
            tweet="54.8K Tweets "
          />
          <Trending
            head="Trending in Business & finance"
            tag="Deloitte"
            tweet="1,925 Tweets "
          />
          <Trending
            head="Trending in Politics"
            tag="#TwitterSpaceWithIK"
            tweet="74.5K Tweets "
          />
          <Trending
            head="Trending in Politics"
            tag="Haley"
            tweet="12.4K Tweets "
          />
          <Trending
            head="Trending in Politics"
            tag="Sinema"
            tweet="8,251 Tweets "
          />
          <Trending
            head="Trending in Business & finance"
            tag="Loan"
            tweet="47.2K Tweets "
          />
          <Trending
            head="Trending in Business & finance"
            tag="10,000 Bitcoins"
            tweet="10,000 Bitcoins "
          />
        </div>
      )}

      {buttonClicked === 4 && (
        <div
          className={`exx ${buttonClicked ? "visible" : "hidden"}`}
          id="div-4"
        >
          <Trending
            head="Trending in Sports"
            tag="Juventus"
            tweet="64.1K Tweets "
          />
          <Trending
            head="Sports · Trending"
            tag="#ChennaiSuperKings"
            tweet="1,680 Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="St James"
            tweet="4,322 Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="Neymar"
            tweet="57.9K Tweets "
          />
          <Trending
            head="Sports · Trending"
            tag="#HallaBolKonjamNallaBol"
            tweet="1,458 Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="#SerieA"
            tweet="8,633 Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="Maddison"
            tweet="2,454 Tweets"
          />
          <Trending head="Trending in Sports" tag="Matic" tweet="116K Tweets" />
          <Trending head="Trending in Sports" tag="FIGC" tweet="11K Tweets " />
          <Trending
            head="Trending in Sports"
            tag="#NewcastleUnited"
            tweet="1,329 Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="Abraham"
            tweet="25.3K Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="Leicester City"
            tweet="9,049 Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="St James"
            tweet="4,322 Tweets "
          />
          <Trending
            head="Sports · Trending"
            tag="Qualifier 1"
            tweet="9,675 Tweets "
          />
          <Trending
            head="Trending in Sports"
            tag="Melo"
            tweet="96.6K Tweets "
          />
        </div>
      )}

      {buttonClicked === 5 && (
        <div
          className={`exx ${buttonClicked ? "visible" : "hidden"}`}
          id="div-5"
        >
          <Trending
            head="Trending in Entertainment"
            tag="#JohnWick4"
            tweet="1,021 Tweets "
          />
          <Trending
            head="Trending"
            tag="KIM TAEHYUNG AT CANNES"
            tweet="12.5K Tweets "
          />
          <Trending
            head="Trending in Fashion & beauty"
            tag="#TAEHYUNGxCELINE"
            tweet="105K Tweets "
          />
          <Trending
            head="Trending"
            tag="#AvatarTheWayOfWater"
            tweet="1,370 Tweets "
          />
          <Trending
            head="Trending in Entertainment"
            tag="Joker 2"
            tweet="1,171 Tweets"
          />
          <Trending
            head="Trending in Music"
            tag="#Cannes2023"
            tweet="232K Tweets "
          />
          <Trending
            head="Trending in Entertainment"
            tag="Rest in Peace"
            tweet="Trending with Ray Stevenson "
          />
          <Trending
            head="Trending in Entertainment"
            tag="Rotten Tomatoes"
            tweet="3,657 Tweets"
          />
          <Trending
            head="Trending in Korean music"
            tag="Ruby"
            tweet="105K Tweets "
          />
          <Trending
            head="Trending"
            tag="#에이스_데뷔6주년_축하해"
            tweet="2,951 Tweets "
          />
          <Trending head="Trending" tag="Gunna" tweet="14.5K Tweets " />
          <Trending head="Trending" tag="#Barbie" tweet="8,490 Tweets " />
          <Trending
            head="Trending in Entertainment"
            tag="#Thor"
            tweet="1,360 Tweets "
          />
          <Trending
            head="Trending in Korean music"
            tag="#Offtherecord_WOOYOUNG"
            tweet="5,969 Tweets "
          />
          <Trending
            head="Trending in Korean music"
            tag="#JONGHO"
            tweet="47.6K Tweets "
          />
        </div>
      )}
    </div>
  );
}

export default Exfeed;
