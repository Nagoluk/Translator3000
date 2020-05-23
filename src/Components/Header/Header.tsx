import React from 'react';
import HeaderStyles from './header.module.css';

const Header: React.FC = () => {
    return(<div className={HeaderStyles.Wrap}>
            <h1>Translator 3000</h1>
          </div>)
}

export default Header;