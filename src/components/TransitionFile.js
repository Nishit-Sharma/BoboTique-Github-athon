import './Global.css';
import {useSpring, animated} from 'react-spring'

function TransitionFile() {
    const props = useSpring({
        to: { opacity: 1},
        from: { opacity: 0},
        delay: 300,
      });
}

export default TransitionFile;
