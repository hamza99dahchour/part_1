import {useState} from 'react'

const Button = ({titre,clickAction}) => {
  return (
    <button onClick={clickAction}>{titre}</button>
  )
}

const Heading = ({ titre }) => <h2>{titre}</h2>
// const Paragraphe = ({ titre }) => <p>{titre}</p>

const Paragraphe =  ({ titre, votes }) => (
  <div>
    <p>{titre}</p>
    <p>has {votes} votes</p>
  </div>
)


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  

  const [selected,setSelected] = useState(0)
  const [vote,setVote] = useState(Array(anecdotes.length).fill(0));

  const recupererAnecdoteSuivante = () => {
    const rand = Math.floor((Math.random()*anecdotes.length))
    setSelected(rand)
  }

  const dernierVote = () => {
    const copy = [...vote]
    copy[selected]+=1
    setVote(copy)
  }

  const maxvote = Math.max(...vote)
  const mostVotedIndex = anecdotes[vote.indexOf(maxvote)]
 

  return (
    <div>
    <Heading titre="Anecdote of the day" />
    <Paragraphe titre={anecdotes[selected]} votes={vote[selected]} />
    <Button titre="next anecdote" clickAction={recupererAnecdoteSuivante} />
    <Button titre="vote" clickAction={dernierVote} />
    <Heading titre="Anecdote with the most votes" />
    <Paragraphe titre={mostVotedIndex} />
    <Paragraphe titre={anecdotes[selected]} votes={maxvote} />
    </div>
  );
}

export default App;