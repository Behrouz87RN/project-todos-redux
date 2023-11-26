import './Header.css';
import { MdOutlineTask } from 'react-icons/md';
import { IconContext } from 'react-icons';

export const Header = () => {
  return (
    <header>
        <IconContext.Provider value={{className: 'taskIcon'}}>
        <div className='header-container'>
            <MdOutlineTask />
            <h1>ToDoLoo App</h1>
        </div>
        </IconContext.Provider>
    </header>
  )
}
