import React, { useState } from 'react';

function LazyImage({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`lazy-image-wrapper ${className || ''}`} style={{ position: 'relative', overflow: 'hidden' }}>
            {!loaded && (
                <div className="placeholder" style={{
                    backgroundColor: '#e0e0e0',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    Loading...
                </div>
            )}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? 'block' : 'none', width: '100%' }}
            />
        </div>
    );
}

export default LazyImage;