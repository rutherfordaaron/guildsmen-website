import { Link, Outlet } from 'react-router-dom';
import personIcon from '../images/person-solid.svg';
import skillsIcon from '../images/book-solid.svg';
import combatIcon from '../images/person-falling-burst-solid.svg';
import mythIcon from '../images/wand-magic-sparkles-solid.svg';
import craftIcon from '../images/hammer-solid.svg';
import inventIcon from '../images/gears-solid.svg';
import marketIcon from '../images/store-solid.svg';
import estIcon from '../images/building-columns-solid.svg';
import creaturesIcon from '../images/paw-solid.svg';
import gmIcon from '../images/graduation-cap-solid.svg';
import '../css/rules.css';

const Rules = () => {
    return (
        <main>
            <h1>Guildsmen Core Rules</h1>
            <h2>Contents</h2>
            <div className='tableOfContents'>
                <Link to="/rules/character-creation" className='contentLink'>
                    <img className='filter' src={personIcon} alt='' />
                    Character Creation
                </Link>
                <Link to="/rules/skills" className='contentLink'>
                    <img className='filter' src={skillsIcon} alt='' />
                    Skills
                </Link>
                <Link to="/rules/combat" className='contentLink'>
                    <img className='filter' src={combatIcon} alt='' />
                    Combat
                </Link>
                <Link to="/rules/myth" className='contentLink'>
                    <img className='filter' src={mythIcon} alt='' />
                    Myth
                </Link>
                <Link to="/rules/crafting" className='contentLink'>
                    <img className='filter' src={craftIcon} alt='' />
                    Crafting
                </Link>
                <Link to="/rules/invention" className='contentLink'>
                    <img className='filter' src={inventIcon} alt='' />
                    Invention
                </Link>
                <Link to="/rules/the-market" className='contentLink'>
                    <img className='filter' src={marketIcon} alt='' />
                    The Market
                </Link>
                <Link to="/rules/establishemnts" className='contentLink'>
                    <img className='filter' src={estIcon} alt='' />
                    Establishemnts
                </Link>
                <Link to="/rules/creatures" className='contentLink'>
                    <img className='filter' src={creaturesIcon} alt='' />
                    Creatures
                </Link>
                <Link to="/rules/for-the-gm" className='contentLink'>
                    <img className='filter' src={gmIcon} alt='' />
                    For the Game Master
                </Link>
            </div>
            <Outlet />
        </main>
    )
}

export default Rules;