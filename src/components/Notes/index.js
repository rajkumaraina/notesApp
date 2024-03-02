import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  Input,
  InputContainer,
  NoNotesImage,
  NoHeading,
  NoPara,
  TextArea,
  Unordered,
  ButtonContainer,
  Button,
  NoNotesContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notesList, setNotes] = useState([])

  const titleChange = event => setTitle(event.target.value)
  const descriptionChange = event => setDescription(event.target.value)

  const buttonClicked = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      description,
    }
    setNotes(prevState => [...prevState, newNote])
    setTitle('')
    setDescription('')
  }
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <InputContainer onSubmit={buttonClicked}>
        <Input placeholder="Title" onChange={titleChange} value={title} />
        <br />
        <TextArea
          placeholder="Take a Note..."
          onChange={descriptionChange}
          rows="4"
          cols="130"
          value={description}
        />
        <br />
        <ButtonContainer>
          <Button type="submit">ADD</Button>
        </ButtonContainer>
      </InputContainer>
      <Unordered>
        {notesList.length > 0 ? (
          notesList.map(each => <NoteItem item={each} key={each.id} />)
        ) : (
          <NoNotesContainer>
            <NoNotesImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <NoHeading>No Notes Yet</NoHeading>
            <NoPara>Notes you add will appear here</NoPara>
          </NoNotesContainer>
        )}
      </Unordered>
    </MainContainer>
  )
}
export default Notes
