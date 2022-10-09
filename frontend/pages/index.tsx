import type { NextPage } from 'next'

function Botton(props){
  return <a href='#'>{props.titulo}</a>;
}

const Home: NextPage = () => {
  return (
    <div>
      <Botton titulo= "Parei em 24:05" />
    </div>
  )
}

export default Home
