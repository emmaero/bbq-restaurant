import React from 'react';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function PageFooter() {
    return (
      <footer>
        <div className="icons-footer">
          <a href="https://github.com/emmaero/bbq-restaurant.git">
            <FaFacebookSquare />
          </a>
          <a href="https://github.com/emmaero/bbq-restaurant.git">
            <FaInstagram />
          </a>
        </div>
        <div className="copyright">© 2021 Emmanuel</div>
      </footer>
    );
}
