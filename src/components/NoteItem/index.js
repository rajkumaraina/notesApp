import {ListItem, Notes, Heading} from './styledComponents'

const NoteItem = props => {
  const {item} = props
  const {title, description} = item
  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Notes>{description}</Notes>
    </ListItem>
  )
}
export default NoteItem
