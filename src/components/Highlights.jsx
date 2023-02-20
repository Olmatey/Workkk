import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
       <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why Shop with <span className='purple'>Starstruck Liquor </span>
                </h2>
                <div className="highlight__wrapper">
                <Highlight 
                icon={<FontAwesomeIcon icon='bolt'/>}
                title='Easy And Quick' 
                para='Get free and same day delivery with all orders made before 2 pm'
                />
                 <Highlight 
                icon={<FontAwesomeIcon icon='book-open'/>}
                title='We Know What You Need' 
                para='We take pride in selling the most popular and well knwon branded drinks across the globe'
                />
                 <Highlight 
                icon={<FontAwesomeIcon icon='tags'/>}
                title='Affordable' 
                para='Satisfy your taste buds without emptying the bank '
                />
                </div>
            </div>
        </div>
       </section>
    );
}

export default Highlights;
