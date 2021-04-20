import { useEffect } from "react"

export default function Home(props) {
  //requisição modelo SPA
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //   .then( response => response.json())
  //   .then(data => console.log(data)
  //   )
  // }, [])


  return (
    <div>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//requisição modelo SSR :
// exportar a seguinte função dentro de qualquer arquivo da pasta page 

// export async function getServerSideProps(){
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return{
//     props: {
//       episodes: data,

//     }
//   }
//   //props retorna para Home
// }


//requisição modelo SSG (só funciona em produção --> gerar build para simular aplicação rodando em produção)
export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props: {
      episodes: data,

    },
    revalidate: 60 * 60 * 8, //atualiza a pagina de 8 em 8 horas
  }
  //props retorna para Home
}
