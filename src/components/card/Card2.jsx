import React from 'react';
import './Card2.styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card2 = () => {
  return (
    <div class="container">
      <div class="card">
        <h3 class="title">Card 1</h3>
        <ul>
          <li>
            <a href="https://github.com/atuljustano">
              Demo <FontAwesomeIcon icon="wrench" className="option-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/atulkprajapati2000/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="title">Card 1</h3>
        <ul>
          <li>
            <a href="https://github.com/atuljustano">
              Demo <FontAwesomeIcon icon="wrench" className="option-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/atulkprajapati2000/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="title">Card 1</h3>
        <ul>
          <li>
            <a href="https://github.com/atuljustano">
              Demo <FontAwesomeIcon icon="wrench" className="option-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/atulkprajapati2000/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card2;
