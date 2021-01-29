import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/componentes/Widget'
import Footer from '../src/componentes/Footer'
import QuizBackground from '../src/componentes/QuizBackground'
import GitHubCorner from '../src/componentes/GitHubCorner'



// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   background-size: cover;
//   flex: 1;
// `


export const QuizContainer = styled.div `
  width: 100%;
  max-width:350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding:15px;
  }
`

export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <Widget>

        <Widget.Header>
          <h1>Porque que o Levi é um deus?</h1>
        </Widget.Header>

        <Widget.Content>
          <p>Justifique a sua resposta.</p>
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
          <h1>Levi gostoso</h1>
          <p>Quem concorda respira.</p>
        </Widget.Content>
      </Widget>
      <Footer />

    </QuizContainer>
    <GitHubCorner projectUrl="www.google.com.br" />
  </QuizBackground>

  );
}
