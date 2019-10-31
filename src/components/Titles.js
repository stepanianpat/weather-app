import React from 'react';

class Titles extends React.Component {
  render() {
    return (
      <div>
        <h1 className='title-container__title'>WEATHER SCANNER</h1>
        <p className='title-container__subtitle'>
          Search the weather in any city around the world{' '}
        </p>
      </div>
    );
  }
}

export default Titles;
