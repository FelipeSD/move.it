import '../styles/global.css';
import {ChallengesProvider} from "../contexts/ChallengesContext";
import {AsideNavigation} from "../components/AsideNavigation";

function MyApp({ Component, pageProps }) {
  return (
      <ChallengesProvider
          name={pageProps.name}
          url={pageProps.url}
          level={pageProps.level}
          defaultTime={pageProps.defaultTime}
          currentExperience={pageProps.currentExperience}
          challengesCompleted={pageProps.challengesCompleted}
      >
          <AsideNavigation />
          <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
