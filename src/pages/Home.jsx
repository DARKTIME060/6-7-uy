import { SlBasketLoaded } from "react-icons/sl";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="header" >
      <div className="header__content">
      </div>
      <div className="header__info container">
        <h3 className="header__info-title">Приветствую на наш сайт !</h3>
        <p className="header__info-text">Далеко-далеко за словесными горами в стране гласных и
          согласных живут рыбные тексты. Наш точках запятых предложения пояс запятой! Букв,
          переписывается, напоивший использовало взобравшись несколько точках дал инициал
          она, великий они там реторический.
        </p>
       <Link to="/product" className="header__info-basket"><SlBasketLoaded/><span>Купить</span></Link>
      </div>
      
    </header>
  )
}

export default Home