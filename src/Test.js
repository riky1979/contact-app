import React, { Component, Fragment } from 'react';

class Test extends Component {
    render() {
        const name = 'Yong2';
        const value = 3;
        return (
            <Fragment>
                <div>안녕! {name}~!</div>
                <div>hello! {name}~!</div>
                {
                    /*1 + 1 === 2 && (<div>맞아요</div>)*/
                    1 + 1 === 2 && (<div>맞아요</div>)
                }
                {
                    (() => {
                        if(value === 1) return (<div>하나</div>);
                        if(value === 2) return (<div>둘</div>);
                        if(value === 3) return (<div>셋</div>);
                    })()
                }
            </Fragment>
        );
    }
}

export default Test;