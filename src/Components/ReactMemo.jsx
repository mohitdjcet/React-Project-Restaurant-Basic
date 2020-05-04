import React,{memo} from 'react';

const ReactMemo = (props) => {
    console.log('Home Component', props.data);
    return (
        <div>
            <h1 className='primary'>Mohit1</h1>
            {/* <h1 className={style.primary1}>Amit1</h1> */}
            <h1>Home Component</h1>
        </div>
    )
}
export default memo(ReactMemo);