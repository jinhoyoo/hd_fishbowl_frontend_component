import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { Language } from '../../types';
import enFlag from './flags/us.jpg';
import germanyFlag from './flags/germany.jpg';
import italyFlag from './flags/italy.jpg';
import spainFlag from './flags/spain.jpg';
import russiaFlag from './flags/russia.jpg';
import koreaFlag from './flags/korea.png';

// get the languages
const Languages: Language[] = [
	{
        name: '한국어',
        flag: koreaFlag,
    },
    {
        name: '영어',
        flag: enFlag,
    },    
    {
        name: '독일어',
        flag: germanyFlag,
    }
];

const LanguageDropdown = () => {
    const enLang = Languages[0] || {};
    const [isOpen, toggleDropdown] = useToggle();

    return (
        <Dropdown show={isOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                variant="link"
                id="dropdown-languages"
                as={Link}
                to="#"
                onClick={toggleDropdown}
                className="nav-link dropdown-toggle arrow-none"
            >
                <img src={enLang.flag} alt={enLang.name} className="me-0 me-sm-1" height="12" />{' '}
                <span className="align-middle d-none d-sm-inline-block">{enLang.name}</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align={'end'} className="dropdown-menu-animated topbar-dropdown-menu">
                <div onClick={toggleDropdown}>
                    {Languages.map((lang, i) => {
                        return (
                            <Link to="#" className="dropdown-item notify-item" key={i + '-lang'}>
                                <img src={lang.flag} alt={lang.name} className="me-1" height="12" />{' '}
                                <span className="align-middle">{lang.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageDropdown;
