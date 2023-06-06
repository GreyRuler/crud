export async function getNotes() {
	const response = await fetch(`${process.env.REACT_APP_URL}/notes`)
	return await response.json()
}

export async function deleteNote(id) {
	const response = await fetch(`${process.env.REACT_APP_URL}/notes/${id}`, {
		method: 'DELETE',
	})
	return response.ok;
}

export async function postNote(body) {
	const response = await fetch(`${process.env.REACT_APP_URL}/notes`, {
		method: 'POST',
		body,
	})
	return response.ok;
}
