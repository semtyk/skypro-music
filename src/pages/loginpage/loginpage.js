import { Link } from 'react-router-dom';
import * as S from './styed.loginpage'

function LoginPageComp({isRegistredMode, handleLogin}) {
  
  return (
    <S.Wrapper>
      <S.EnterContainer>
        <S.ModalBlock>
          <S.FormModalLogin action="#">
            <Link to="/">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </Link>
            <S.ModalInputLogin
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInputPswrd
              type="password"
              name="password"
              placeholder="Пароль"
            />
            {isRegistredMode && (<S.ModalInputPswrd
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />)}
            {!isRegistredMode && (
              <S.ModalBtnEnter onClick={handleLogin}>
              <Link to="/">Войти</Link>
            </S.ModalBtnEnter>)}
            {!isRegistredMode && (<S.ModalBtnSignup>
              <Link to="/signup">Зарегистрироваться</Link>
            </S.ModalBtnSignup>)}

            {isRegistredMode && (<S.ModalBtnSignupEnt>
              <Link to="/">Зарегистрироваться</Link>
            </S.ModalBtnSignupEnt>)}

          </S.FormModalLogin>
        </S.ModalBlock>
      </S.EnterContainer>
    </S.Wrapper>
    );
};

export default function LoginPage({handleLogin}) {
    return (
      <LoginPageComp isRegistredMode={false} handleLogin={handleLogin}/>
    );
    // return (
    // <S.Wrapper>
    //   <S.EnterContainer>
    //     <S.ModalBlock>
    //       <S.FormModalLogin action="#">
    //         <a href="../">
    //           <S.ModalLogo>
    //             <img src="../img/logo_modal.png" alt="logo" />
    //           </S.ModalLogo>
    //         </a>
    //         <S.ModalInputLogin
    //           type="text"
    //           name="login"
    //           placeholder="Почта"
    //         />
    //         <S.ModalInputPswrd
    //           type="password"
    //           name="password"
    //           placeholder="Пароль"
    //         />
    //         <S.ModalBtnEnter>
    //           <a href="../index.html">Войти</a>
    //         </S.ModalBtnEnter>
    //         <S.ModalBtnSignup>
    //           <a href="signup.html">Зарегистрироваться</a>
    //         </S.ModalBtnSignup>
    //       </S.FormModalLogin>
    //     </S.ModalBlock>
    //   </S.EnterContainer>
    // </S.Wrapper>
    // );
}

export {LoginPageComp}



    
