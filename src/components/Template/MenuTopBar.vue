<template>
  <div>
    <nav>
      <ul>
        <li>
          <a href="index.html" title="">
          <span><img src="/static/images/icon1.png" alt=""/></span>
          Home
          </a>
        </li>
        <li>
          <a href="companies.html" title="">
          <span><img src="/static/images/icon2.png" alt=""/></span>
          Companies
          </a>
          <ul>
            <li><a href="companies.html" title="">Companies</a></li>
            <li><a href="company-profile.html" title="">Company Profile</a></li>
          </ul>
        </li>
        <li>
          <a href="projects.html" title="">
          <span><img src="/static/images/icon3.png" alt=""/></span>
          Projects
          </a>
        </li>
        <li>
          <a href="profiles.html" title="">
          <span><img src="/static/images/icon4.png" alt=""/></span>
          Profiles
          </a>
          <ul>
            <li><a href="user-profile.html" title="">User Profile</a></li>
            <li><a href="my-profile-feed.html" title="">my-profile-feed</a></li>
          </ul>
        </li>
        <li>
          <a href="jobs.html" title="">
          <span><img src="/static/images/icon5.png" alt=""/></span>
          Jobs
          </a>
        </li>
        <li>
          <a href="#" title="" class="not-box-open">
          <span><img src="/static/images/icon6.png" alt=""/></span>
          Messages
          </a>
          <div class="notification-box msg">
            <div class="nt-title">
              <h4>Setting</h4>
              <a href="#" title="">Clear all</a>
            </div>
            <div class="nott-list">
              <div class="notfication-details">
                <div class="noty-user-img">
                  <img src="/static/images/resources/ny-img1.png" alt=""/>
                </div>
                <div class="notification-info">
                  <h3><a href="messages.html" title="">Jassica William</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div class="notfication-details">
                <div class="noty-user-img">
                  <img src="/static/images/resources/ny-img2.png" alt=""/>
                </div>
                <div class="notification-info">
                  <h3><a href="messages.html" title="">Jassica William</a></h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div class="notfication-details">
                <div class="noty-user-img">
                  <img src="/static/images/resources/ny-img3.png" alt=""/>
                </div>
                <div class="notification-info">
                  <h3><a href="messages.html" title="">Jassica William</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt
                    ut labore et dolore magna aliqua.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div class="view-all-nots">
                <a href="messages.html" title="">View All Messsages</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" title="" class="not-box-open">
          <span><img src="/static/images/icon7.png" alt=""/></span>
          Notification
          </a>
          <div class="notification-box">
            <div class="nt-title">
              <h4>Setting</h4>
              <a href="#" title="">Clear all</a>
            </div>
            <div class="nott-list">
              <div class="notfication-details">
                <div class="noty-user-img">
                  <img src="/static/images/resources/ny-img1.png" alt=""/>
                </div>
                <div class="notification-info">
                  <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div class="notfication-details">
                <div class="noty-user-img">
                  <img src="/static/images/resources/ny-img2.png" alt=""/>
                </div>
                <div class="notification-info">
                  <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div class="notfication-details">
                <div class="noty-user-img">
                  <img src="/static/images/resources/ny-img3.png" alt=""/>
                </div>
                <div class="notification-info">
                  <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div class="notfication-details">
                <div class="noty-user-img">
                  <img src="/static/images/resources/ny-img2.png" alt=""/>
                </div>
                <div class="notification-info">
                  <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div class="view-all-nots">
                <a href="#" title="">View All Notification</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>

    <div class="menu-btn">
      <a href="#" title=""><i class="fa fa-bars"/></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuTopBar'
}
</script>

<style scoped>

</style>