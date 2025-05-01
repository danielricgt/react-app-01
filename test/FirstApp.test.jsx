import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('test on fist app', () => {
    test('must to do match with sanpshot', () => {
        const title = 'Hola, soy Daniel';
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    });

    test('must show the title in the fist lie', () => {
        const title = 'Hola, soy Daniel';
        const { container, getByText } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy();
        const h1 = container.querySelector('h2');
        expect(h1).toBeTruthy();
        expect(h1.innerHTML).toBe(title);

    });


});
