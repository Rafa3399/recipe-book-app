import "./Footer.css"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

function Footer (){
  return(
    <footer>
      <div id="footer-images">
        <hr className="line"></hr>
        <img src={github} className="github" alt="Github" />
        <img src={linkedin} className="linkedin" alt="Linkedin" />
        <hr className="line"></hr>
      </div>
      <p>By Rafael Hernandez Soler</p>
    </footer>
  )
}

export default Footer;