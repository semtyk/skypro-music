import * as S from '../loginpage/styed.loginpage'

export default function SignupPage() {
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
            <S.ModalInputPswrd
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignupEnt>
              <a href="../index.html">Зарегистрироваться</a>
            </S.ModalBtnSignupEnt>
          </S.FormModalLogin>
        </S.ModalBlock>
      </S.EnterContainer>
    </S.Wrapper>
    );
}
