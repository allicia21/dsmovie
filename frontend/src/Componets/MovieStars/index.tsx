import { ReactComponent as StartFull } from 'assets/img/star-full.svg';
import { ReactComponent as StartHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StartEmpty } from 'assets/img/star-empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StartFull />
            <StartFull />
            <StartFull />
            <StartHalf />
            <StartEmpty />
        </div>
    );
}

export default MovieStars;