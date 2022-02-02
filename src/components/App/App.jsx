import Profile from "../Profile/Profile";
import Container from "../Container/Container";
import Section from '../Section/Section'
import Statistics from '../Statistics/Statistics'
import FriendsList from "../Friends/FriendsList";
import Transactions from "../TransactionsHistory/Transactions";

import user from '../../data/user.json'
import statData from '../../data/statistics-data.json'
import friends from '../../data/friends-data.json'
import transactions from '../../data/transactions.json'



import './App.css';

function App() {
    return (
        <Container>
            <Section>
                <Profile user={user} />
                  <Statistics
                    title="Upload stats"
                    stats={statData} />
                  <Statistics
                    stats={statData} />
                <FriendsList friends={friends} />
                <Transactions items = {transactions} />
            </Section>
        </Container>
    )
}

export default App;
