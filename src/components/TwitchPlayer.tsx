import { useEffect } from 'react';

const TwitchPlayer = () => {
  useEffect(() => {
    const loadTwitchScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://embed.twitch.tv/embed/v1.js';
      script.async = true;

      await new Promise((resolve) => {
        script.onload = resolve;
        document.body.appendChild(script);
      });

      new Twitch.Embed('twitch-embed', {
        width: '100%',
        height: '100%',
        channel: 'mucral_tv',
      });
    };


    loadTwitchScript();

    return () => {
      const existingScript = document.querySelector('script[src="https://embed.twitch.tv/embed/v1.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return <div id="twitch-embed" className='twitch-player' />;
};

export default TwitchPlayer;
