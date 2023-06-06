import Note from './Note';

export default function NoteList({ notes, onClickRemove }) {
	return (
		<div className='note-list'>
			{notes.map((note) => (
				<Note key={note.id} note={note} handlerClickRemove={() => onClickRemove(note.id)}/>
			))}
		</div>
	)
}
