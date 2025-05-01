import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('test on fist app', () => {
    test('must to do match with sanpshot', () => {
        const title = 'Hola, soy Daniel';
        render(<FirstApp title={title}/>)
    });
    
});
