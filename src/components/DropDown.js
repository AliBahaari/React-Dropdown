import '../styles/DropDown.css';
import { useEffect, useState, useRef } from 'react';

function DropDown(props) {

    const { items, direction, onSelect } = props;
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        onSelect(selected);
    }, [selected]);

    const [dropDown, setDropDown] = useState(false);

    useEffect(() => {
        document.addEventListener('click', clickOutside, true);
        return () => {
            document.removeEventListener('click', clickOutside, true);
        }
    }, []);

    const dropDownSelector = useRef(null);

    const clickOutside = (e) => {
        if (dropDownSelector.current && !dropDownSelector.current.contains(e.target)) {
            setDropDown(false);
        }
    }

    return (
        <div className='dropDown'>
            <div className='representPortion' ref={dropDownSelector} onClick={() => setDropDown(prevState => !prevState)} style={direction === 'rtl' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' }}>
                <p>{items[selected][0]}</p>
                <div className='arrowDown'></div>
            </div>

            <div className='subDropDown' style={dropDown ? { display: 'block' } : { display: 'none' }}>
                {
                    items.map((i, j) => (
                        <div key={j} onClick={() => setSelected(j)}>
                            <p>{i[0]}</p>
                            <p>{i[1]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default DropDown;