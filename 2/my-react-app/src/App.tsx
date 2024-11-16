
function App() {

  return (
    <div className="App">
      <div className="stickyitem">
        {/* 顶部 */}
        <div className="top">
          <div className="container">
            <img src="../assets/image.png" alt="" />
            <span>stack<strong>overflow</strong></span>
            <div className="nav">
              <li>About</li>
              <li>Products</li>
              <li>OverflowAI</li>
            </div>
            <div className="search">
              <span className="icon"></span>
              <input type="text" placeholder="Search..." />
            </div>
            <div className="login">Login in</div>
            <div className="sign">Sign up</div>
          </div>
        </div>
      </div>
      {/* 主体 */}
      <div className="body">
        {/* 左侧边栏 */}
        <div className="left">
          <div className="container1">
            <li><img src="../assets/首页B.png" alt="" />Home</li>
            <li><img src="../assets/消息B.png" alt="" />Questions</li>
            <li><img src="../assets/导航.png" alt="" />Tags</li>
          </div>
          <div className="container2">
            <li><img src="../assets/首页B.png" alt="" />Users</li>
            <li><img src="../assets/消息B.png" alt="" />Companies</li>
          </div>
          <div className="container3">
            <li className="lab"><span>Labs</span><span className="circle">!</span></li>
            <li><img src="../assets/消息B.png" alt="" />Jobs</li>
            <li><img src="../assets/导航.png" alt="" />Discussions</li>
          </div>
          <div className="container4">
            <li className="lab"><span>COLLECTIVE</span><span className="add">+</span></li>
            <p>Communities for your favorite technologies.<a href="#">
              Explore all Collectives</a></p>
          </div>
          <div className="container5">
            <li>TEAMS</li>
            <img src="../assets/image1.png" alt="" />
            <div><strong>Now avaiable on Stack Overflow for Teams!</strong>AI features
              where you work search,IDE,and chat.</div>
            <button className="btn1">Learm more</button>
            <button className="btn2">Explore Teams</button>
          </div>
        </div>
        {/* 中间内容 */}
        <div className="center">
          {/* 中间内容 */}
          <div className="title">
            <h1>What does and doesn't cause repaints/reflows when inside
              requestAnimationFrame?</h1>
            <p>Asked 8 years,7 months ago Modified 8 years,7 months ago Viewed 2k times</p>
            <div className="ask">Ask Question</div>
          </div>
          <div className="content">
            <div className="center-content">
              <div className="left2">
                <div className="item1">↑</div>
                <div className="item2">5</div>
                <div className="item3">↓</div>
              </div>
              <div className="tent"></div>
            </div>
              <div className="right-content">
                <div className="blog">
                  <div className="title">
                    <span>The Overflow Blog</span>
                  </div>
                  <div className="tent">
                      <li><img src="../assets/导航.png" alt="" /><span>A student of Geoff Hinton,Yann LeCun,
                      and Jeff Dean explains where Al is headed</span></li>
                      <li><img src="../assets/导航.png" alt="" /><span>Meet the guy responsible for building the
                      Call of Duty game engine</span></li>
                  </div>
                </div>
                <div className="Meta">
                  <div className="title">
                      <span>Featured on Meta</span>
                    </div>
                    <div className="tent">
                        <li><img src="../assets/导航.png" alt="" /><span>More network sites to see advertising test</span></li>
                        <li><img src="../assets/导航.png" alt="" /><span>We're (finally) going to the cloud</span></li>
                        <li><img src="../assets/导航.png" alt="" /><span>Call for testers for an early access release
                        of a Stack Overflow extension...</span></li>
                    </div>
              </div>
              <div className="related">
                <h1>Related</h1>
                <div>
                  <div className="number">B512</div>
                  <a href="#">javascript html animation graphics </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
