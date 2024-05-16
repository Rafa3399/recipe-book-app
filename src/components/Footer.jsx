import "./Footer.css"
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"

function Footer (){
  return(
    <footer>
      <div id="footer-images">
        <hr className="line"></hr>
        <a href="https://github.com/Rafa3399"><img src={github} className="github" alt="Github" /></a>
        <a href="https://www.linkedin.com/in/rafael-hernandez-soler-7a449323b/"><img src={linkedin} className="linkedin" alt="Linkedin" /></a>
        <hr className="line"></hr>
      </div>
      <p>By Rafael Hernandez Soler</p>
    </footer>
  )
}

export default Footer;