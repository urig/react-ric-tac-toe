import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import Game  from './Game.js'

describe('testing', ()=> {
    it('should do something', () => {
        /** Arrange **/ 
        const renderer = new ShallowRenderer();
        renderer.render(<Game />); 
        const result = renderer.getRenderOutput(); 
        console.log(result.props.children[0].props.children);
        /** Act **/
        /** Assert **/
        expect(true).toBe(true)
    })
})