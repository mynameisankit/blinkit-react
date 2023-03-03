function joinClasses(classList) {
    return classList.flat().reduce(
        (acc, curr, idx) => {
            if(idx === 0)
                return curr;
            else if(curr)
                return `${acc} ${curr}`;
            else
                return acc;
        }, 
        ''
    );
}

export default joinClasses;