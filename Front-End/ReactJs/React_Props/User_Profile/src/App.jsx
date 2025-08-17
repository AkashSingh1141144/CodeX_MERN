import UserProfile from "./components/UserProfile"

function App() {


  return (
    <>
      <UserProfile />
      <UserProfile 
        username="Pooja Singh"
        age = {26}
        image="https://cdn.trii.global/Banner/NewsArticle/mobile/-765275405.jpg"
      />
      <UserProfile 
        username = "Madhuri Singh"
        age = {23}
        image = "https://c7.patreon.com/https%3A%2F%2Fwww.patreon.com%2F%2Fcard-teaser-image%2Fproduct%2F237225/selector/%23card-teaser"
      />
    </>
  )
}

export default App
