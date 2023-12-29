import { useEffect } from 'react';

// Interface para representar o objeto 'adsbygoogle'
interface AdsByGoogle {
  push?: () => void;
}

declare global {
  interface Window {
    adsbygoogle: AdsByGoogle[];
  }
}

function AdComponent() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8388026973141482';
    script.crossOrigin = 'anonymous';

    document.head.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Initialize adsbygoogle after the script is loaded
    (window.adsbygoogle = window.adsbygoogle || []).push?.({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-8388026973141482"
      data-ad-slot="7211354142"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default AdComponent;
