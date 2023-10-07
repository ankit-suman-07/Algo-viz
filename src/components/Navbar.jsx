import React, { useState } from 'react';
import "../css/Navbar.css";

export const Navbar = ({ setAlgorithm }) => {
    const algoList = ["Bubble Sort", "Quick Sort", "Insertion Sort", "Merge Sort"];

    const handleSelect = (event) => {
        let selectedItem = event.target.value;
        selectedItem = selectedItem.replaceAll(" ", "");
        setAlgorithm(selectedItem);

    }

    return (
        <nav>
            <div className='logo' >
                Algo-Viz
            </div>
            <div className='algorithm-list' >
                <select name="algos" id="algos" onChange={handleSelect}>
                    <option value="" selected disabled hidden>Select Algorithm</option>
                    {
                        algoList.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))
                    }
                </select>
            </div>
        </nav>
    )
}
