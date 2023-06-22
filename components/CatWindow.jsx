'use client';

const CatWindow = () => {
    
    function handleClick() {
        document.getElementById("cat-image").src="https://cataas.com/cat/cute?" + new Date().getTime();
    }
    
    return (
        <div>
            <img id="cat-image" src="https://cataas.com/c" width="400" height="400" alt="cat"></img>
            <button className='black_btn' onClick={handleClick}>Get a new cat</button>
        </div>
    )
}

export default CatWindow