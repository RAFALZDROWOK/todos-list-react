import { Wrapper } from "./styled";
import { Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <Wrapper>
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button 
            onClick={setAllDone} 
            disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Wrapper>
    ));

export default Buttons;