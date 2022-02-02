import Profile from "../Profile/Profile";
import Container from "../Container/Container";
import Section from '../Section/Section'
import Statistics from '../Statistics/Statistics'

import user from '../../data/user.json'
import statData from '../../data/statistics-data.json'

import './App.css';

function App() {
    return (
        <Container>
            <Section>
                <Profile user={user} />
                 <Statistics
        title="Upload stats"
        stats={statData} />
            </Section>
        </Container>
    )
}

export default App;
