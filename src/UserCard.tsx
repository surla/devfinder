import "./UserCard.css";

function UserCard() {
  return (
    <div className="user-card">
      <div className="flex">
        <img
          src="https://avatars.githubusercontent.com/u/9892873?v=4"
          alt=""
          className="user-profile-img"
        />
        <div className="user-content">
          <div className="username flex">
            <div>
              <h1>The Octocat</h1>
              <h3>@octocat</h3>
            </div>
            <p>Join 25 Jan 2011</p>
          </div>

          <div>
            <p className="user-card-paragraph">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros.
            </p>
            <article className="user-stats flex">
              <div>
                <h4>Repos</h4>
                <p>8</p>
              </div>
              <div>
                <h4>Followers</h4>
                <p>3938</p>
              </div>
              <div>
                <h4>Following</h4>
                <p>9</p>
              </div>
            </article>
            <article className="user-info">
              <div>
                <img src="/assets/icon-location.svg" alt="" />
                <span>San Francisco</span>
              </div>
              <div>
                <img src="/assets/icon-twitter.svg" alt="" />
                <span>Not Available</span>
              </div>
              <div>
                <img src="/assets/icon-website.svg" alt="" />
                <span>https://github.blog</span>
              </div>
              <div>
                <img src="/assets/icon-company.svg" alt="" />
                <span>@github</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
