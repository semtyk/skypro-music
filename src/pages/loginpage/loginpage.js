import * as S from './styed.loginpage'

export default function LoginPage() {
    return (
    <S.Wrapper>
      <S.EnterContainer>
        <S.ModalBlock>
          <S.FormModalLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
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
            <S.ModalBtnEnter>
              <a href="../index.html">Войти</a>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <a href="signup.html">Зарегистрироваться</a>
            </S.ModalBtnSignup>
          </S.FormModalLogin>
        </S.ModalBlock>
      </S.EnterContainer>
    </S.Wrapper>
    );
}

    
