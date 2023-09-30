
import AudioPlayer from '../../components/audioplayer/audioplayer';
import CenterBlockNF from '../../components/centerblocknf/centerblocknf';
import NavMenuNF from '../../components/navmenunf/navmenunf';
import SideBarNF from '../../components/sidebarnf/sidebarnf';
import * as S from '../../components/styledApp/styled.app'

export default function NotFoundPage() {
    
    return (
<S.Wrapper>
    <S.Container>
    <S.Main>
        <NavMenuNF />
        <CenterBlockNF/>
        <SideBarNF/>
    </S.Main>
    <AudioPlayer unvisible/>
    <footer />
    </S.Container>
  </S.Wrapper>
    ) 
}