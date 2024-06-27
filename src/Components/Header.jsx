import { useNavigate } from "react-router-dom"

{/*const goTo = useNavigate();*/}

const Header = (props) => {
    return(
        <header>
            <nav>
                <div id="left-side-nav">
                    <h1>MyFinance</h1>
                </div>
                <div id="right-side-nav">
                    <ul class="list-nav">
                        <button class="item-nav"><li>Home</li></button>
                        <button class="item-nav"><li>Transações</li></button>
                    </ul>
                </div>
            </nav>
      </header>
    )
}

export default Header;

