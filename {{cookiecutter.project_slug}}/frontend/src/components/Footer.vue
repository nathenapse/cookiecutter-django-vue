<template>
    <footer>
      <div class="c-footer">
        <div class="columns">
            
          <div class="column fit">
            <div class="c-footer-title">
              {{ cookiecutter.project_name }}
            </div>
            <div class="c-footer-body">
                <ul>
                    <li>
                        P.O.BOX 00000-00000 ETHIOPIA
                    </li>
                    <li>
                        <a href="#">GEMETBET NEWS</a>
                    </li>
                    <li>
                        Need help? Contact us
                    </li>
                    <li>
                        <a href="#">care@{{ cookiecutter.project_slug }}.com</a>
                    </li>
                    <li>
                        <a href="#"><span class="fa fa-facebook-square c-icon"></span> Facebook</a>
                    </li>
                    <li>
                        <a href="#"><span class="fa fa-twitter c-icon"></span> Twitter</a>
                    </li>
                    <li>
                        <a href="#"><span class="fa fa-youtube c-icon"></span> YouTube</a>
                    </li>
                </ul>
            </div>
          </div>

          <div class="column fit">
            <div class="c-footer-title">
              SUPPORT AND TRUST
            </div>
            <div class="c-footer-body">
                <ul>
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </div>
          </div>
        
          <div class="column fit">
            <div class="c-footer-title">
              LEGAL AND COMPLIANCE
            </div>
            <div class="c-footer-body">
                <p>This forum is open only to persons over the age of 18 years.</p>
                <p>Gambling may have adverse effects if not taken in moderation.</p>
            </div>
          </div>
          
          <div class="column fit">
              <div class="c-footer-title">
              LICENCE
              </div>
              <div class="c-footer-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A velit ullam id dolor assumenda temporibus iure sapiente similique, adipisci recusandae numquam molestiae, eius, beatae praesentium at culpa totam maxime perferendis.</p>
              </div>
            <ul>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
          <p>Copyright © 2019 {{ cookiecutter.project_name }} – All rights reserved ®</p>
      </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style>
.c-footer {
  min-height: 330px; 
  background: rgb(74,74,74) !important; 
  margin-top: 20px;
  color: white;
  padding-top: 50px;
  padding-left: 2%;
  padding-right: 2%;
}
.c-footer-title {
    padding-bottom: 8px;
    border-bottom: 1px solid white;
}
.bottom-footer {
    height: 70px;
    background-color: rgb(43, 43, 43);
    text-align: center;
    padding-top: 25px;
    color: white;
}
.bottom-footer p {
    font-size: .9em;
}
.c-footer-body {
    margin-top: 5%;
}
.c-footer-body p {
    font-size: .85em;
    margin-bottom: 5%;
}
.c-footer-body a {
    color: white;
    font-size: .85em;
    font-weight: bold;
}
.c-footer-body li {
    font-size: .85em;
}
.c-icon {
    font-size: 1.4em !important;
}
</style>
