export default function Note({note, handlerClickRemove}) {
	return (
		<div className="note">
			<div className="content">{note.content}</div>
			<span className="material-symbols-outlined btn-remove"
				  onClick={handlerClickRemove}>close</span>
		</div>
	)
}
