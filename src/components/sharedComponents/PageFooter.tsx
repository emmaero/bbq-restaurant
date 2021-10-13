import React from 'react';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function PageFooter() {
    return (
      <footer>
        <div className="icons-footer">
          <a href="">
            <FaFacebookSquare />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
        <div className="copyright">© 2021 Emmanuel</div>
      </footer>
    );
}
