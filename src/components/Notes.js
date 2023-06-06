import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { useEffect, useState } from 'react';
import { getNotes, deleteNote, postNote } from '../api/api';

export default function Notes() {
	const [notes, setNotes] = useState([])
	useEffect(() => {
		getNotes().then((result) => {
			setNotes(result)
		})
	}, [])
	const onClickRemove = (id) => {
		deleteNote(id).then((status) => {
			if (status) {
				getNotes().then((result) => {
					setNotes(result)
				})
			}
		})
	}
	const onSubmit = (body) => {
		postNote(body).then((status) => {
			if (status) {
				getNotes().then((result) => {
					setNotes(result)
				})
			}
		})
	}
	const onSync = () => {
		getNotes().then((result) => {
			setNotes(result)
		})
	}
	return (
		<div className='notes'>
			<div className='header'>
				<h1 className='title'>Заметки</h1>
				<span className="material-symbols-outlined" onClick={onSync}>sync</span>
			</div>
			<NoteList notes={notes} onClickRemove={onClickRemove}/>
			<NoteForm onSubmit={onSubmit}/>
		</div>
	)
}
