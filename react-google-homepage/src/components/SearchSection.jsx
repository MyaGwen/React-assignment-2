import React from 'react';
import AppIcon from './AppIcon';
import InputIcons from './InputIcons';
import Button from './Buttons';
import Language from './Language';

export const SearchSection = () => {
  return (
    <div className="SearchSection">
      <AppIcon />
      <div className="search-container">
        <InputIcons />
      </div>
      <div className="Btns">
        <Button text="Google Search" />
        <Button text="I'm Feeling Lucky" />
      </div>
      <div className="Language">
        <Language />
      </div>
    </div>
  );
};

export default SearchSection;
