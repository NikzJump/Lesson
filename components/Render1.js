function Render1(props){
    let arr = ['a','b','c']
    return(
    <div>
        <p>text</p>
        <p>{props.text}</p>
        <p>{props.text2}</p>
        <p>{props.text_1}</p>
        <p>{props.text_2}</p>
        <ul>
            <li>{arr[0]}</li>
            <li>{arr[1]}</li>
            <li>{arr[2]}</li>
        </ul>
        
    </div>
    );
}

export default Render1