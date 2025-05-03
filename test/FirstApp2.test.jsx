import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('test on fist app', () => {

    const title = 'Hola, soy Daniel';
    const subtitle = 123;
    test('must match with snapshop', () => {
        const { container } = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    });

    test('must show the message "Hi, im goku', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('must show the title in a  h1', () => {
        render(<FirstApp title={title} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

    test('must show the subtitle sent from the props', () => {
        render(<FirstApp subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(1 );
     });



});
