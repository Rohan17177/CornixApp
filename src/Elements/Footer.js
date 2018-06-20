import React,{Component} from "react";



class Footer extends Component
{
    render()
    {
        return(
            <footer   className="footer">
            <div   className="footer-inner">
                <ul   className="footer-link">
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Sitemap</a>
                    </li>
                </ul>
                <ul   className="footer-social">
                    <li>
                        <a href="#" target="_blank"><i   className="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><i   className="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="#" target="_blank"><i   className="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                </ul>
                <div   className="footer-copyright">
                    Copyrights © 2018 - Trading System. All Rights Reserved.
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;