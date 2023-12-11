import { LuListTodo } from "react-icons/lu";

const Header = () => {
    return (
        <header>
            <h1><span className="icon-after-heading" style={{  fontSize: "2.5rem",textdecoratin:"underline" }}><LuListTodo /></span> TodoList</h1>
        </header>
    );
}

export default Header;
