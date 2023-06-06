import { useState } from 'react';

export default function NoteForm({onSubmit}) {
	const [content, setContent] = useState('')
	const handlerChange = (event) => {
		setContent(event.target.value)
	}
	const handlerSubmit = () => {
		if (!content) return
		onSubmit(JSON.stringify({content}))
		setContent('')
	}
	return (
		<form className='note-form'>
			<div className="title-form">Новая заметка</div>
			<textarea name="content" id="textarea-form" cols="30" rows="10"
					  value={content}
					  onChange={handlerChange}></textarea>
			<span className="material-symbols-outlined btn-submit"
				  onClick={handlerSubmit}>send</span>
		</form>
	)
}
