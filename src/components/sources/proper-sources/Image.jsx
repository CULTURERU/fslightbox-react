import React from 'react';
import { SOURCE_CLASS_NAME } from "../../../constants/classes-names";

const Image = (
    {
        fsLightbox: {
            collections: { sourcesLoadsHandlers },
            elements: { sources: sourcesElements },
            props: { customAttributes, sources }
        }, i
    }
) => (
    <img
        onLoad={sourcesLoadsHandlers[i].handleImageLoad}
        className={SOURCE_CLASS_NAME}
        ref={sourcesElements[i]}
        src={sources[i]}
        {...(customAttributes && customAttributes[i] ? customAttributes[i] : {})}
    />
);

export default Image;
