import { mount } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      // This is a callback function that will be called when the marketing app navigates
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
          // It will receive an object with the next pathname as a parameter
          // We can use this to update the history of the container app
        }
      },
    });
    history.listen(onParentNavigate);
    // This will listen to the history changes and call the onParentNavigate function with the new pathname
  }, []);

  return <div ref={ref} />;
};
