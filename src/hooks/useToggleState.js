import React, { useState } from 'react';


function useToggle(initialVal = false) {
    //call useState, "reserve piece of state"
    const [olek,seaOlek] =  useState(initialVal);
    const toggle = () => {
        seaOlek(!olek);
    };
    return [olek, toggle];
}

//return piece of state and a function created inside(toggle)

export default useToggle;