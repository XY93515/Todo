import React from 'react';
import { TABS } from "../redux/actions/type";
import { useDispatch } from 'react-redux';
import { toggleTab } from "../redux/actions";
import '../Tabsoptions.css';

const Tabs = ({ currentTab }) => {
    const dispatch = useDispatch();

    return (
        <div className="filter-container">
            <h2 className="filter-heading">Filter</h2>
            {TABS.map((tab, index) => (
                <button
                    className={tab === currentTab ? 'button selected' : 'button'}
                    onClick={() => dispatch(toggleTab(tab))}
                    key={index}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}

export default Tabs;
