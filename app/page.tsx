import MyProfilePic from "./components/MyProfilePic"
import Posts from "./components/Posts"

export default function Home() {
  return (
    <main className='dark:bg-slate-800  px-6 mx-auto'>
        <MyProfilePic />
      <p className='mt-12 mb-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Afonso</span>
        </span>
      </p>
      <Posts/>
    </main>
  )
}
