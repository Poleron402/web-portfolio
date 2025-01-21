const Burger = ()=>{
    return(

        <svg className='burger' width="419" height="417" viewBox="0 0 419 417" fill="none" xmlns="http://www.w3.org/2000/svg">

        <mask id="path-1-inside-1_31_2" fill="white">
        <path className='cheese' d="M419 182C419 133.731 396.928 87.4382 357.639 53.3066C318.35 19.175 265.063 3.64424e-06 209.5 0C153.937 -3.64424e-06 100.65 19.1749 61.3611 53.3066C22.0723 87.4382 8.38976e-06 133.731 0 182L209.5 182H419Z"/>
        </mask>


        <path className="bun" d="M419 182C419 133.731 396.928 87.4382 357.639 53.3066C318.35 19.175 265.063 3.64424e-06 209.5 0C153.937 -3.64424e-06 100.65 19.1749 61.3611 53.3066C22.0723 87.4382 8.38976e-06 133.731 0 182L209.5 182H419Z" stroke="beige" stroke-width="30" mask="url(#path-1-inside-1_31_2)"/>
        <mask id="path-2-inside-2_31_2" fill="white">
        <path d="M0 317C0 343.522 22.0723 368.957 61.3611 387.711C100.65 406.464 153.937 417 209.5 417C265.063 417 318.35 406.464 357.639 387.711C396.928 368.957 419 343.522 419 317L209.5 317H0Z"/>
        </mask>

        <path className="bun" d="M0 317C0 343.522 22.0723 368.957 61.3611 387.711C100.65 406.464 153.937 417 209.5 417C265.063 417 318.35 406.464 357.639 387.711C396.928 368.957 419 343.522 419 317L209.5 317H0Z" stroke="beige" stroke-width="30" mask="url(#path-2-inside-2_31_2)"/>
        <mask id="path-3-inside-3_31_2" fill="white">
        <rect  y="195" width="419" height="44" rx="14"/>
        </mask>

        <rect className='cheese' y="195" width="419" height="44" rx="14" stroke="yellow" stroke-width="30" mask="url(#path-3-inside-3_31_2)"/>
        <path className="meat" d="M14 255.5H405C408.59 255.5 411.5 258.41 411.5 262V291C411.5 294.59 408.59 297.5 405 297.5H14C10.4101 297.5 7.5 294.59 7.5 291V262C7.5 258.41 10.4102 255.5 14 255.5Z" stroke="brown" stroke-width="15"/>

        </svg>
    )
}
export default Burger