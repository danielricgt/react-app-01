import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";


describe('test on fist app', () => {
    const Initialvalue = 120;
    const value = 100;
    const title = 'Hola, soy Dani';
    const subtitle = "Soy un subtitulo";
    const name = 'Dani';


    test('should to do match with the snapshop', () => {
        const { container } = render(<CounterApp value={Initialvalue} title={title} name={name} subtitle={subtitle} />);
        expect(container).toMatchSnapshot();
    });

    test('must show the value sent form the props', () => {
        render(<CounterApp value={value} />);
        expect(screen.getAllByText(100)).toBeTruthy();
    });

    test('must increment with the bottom +1', () => {
        render(<CounterApp value={Initialvalue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('121')).toBeTruthy();
    });

    test('must decrement with the botton -1', () => {
        render(<CounterApp value={Initialvalue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('119')).toBeTruthy();
    });

    // other ways to take the buttons
    test('reset button must work', () => {
        render(<CounterApp value={Initialvalue} />);
        fireEvent.click(screen.getByText('-1')); 
        fireEvent.click(screen.getByText('-1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name : 'btn-reset'}));
        expect(screen.getByText(120)).toBeTruthy();
        

    });





});
