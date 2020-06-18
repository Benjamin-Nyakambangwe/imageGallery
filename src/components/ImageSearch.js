import React, { useState } from 'react'

const ImageSearch = ({ searchText }) => {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		searchText(text);
		console.log("submit");
	}

	return (
		<div className="flex items-center justify-between flex-wrap mx-12">
		<div>
			<h1 className="font-bold text-xl text-yellow-600">Image Gallery</h1>
		</div>
		<div>
			<div className="max-w-sm rounded-overflow-hidden mb-10 mt-5 mx-auto">
				<form onSubmit={onSubmit} className="w-full max-w-sm">
					<div className="flex items-center border-b border-b-2 border-yellow-600 py-2">
						<input onChange={e => setText(e.target.value)} type="text" placeholder="Search Image....." className="appearance-none bg-transparent border-none w-full text-gray-300 mr-3 py-1 px-2 loading-tight focus:outline-none"/>
						<button className="flex-shrink-0 bg-yellow-600 hover:bg-yellow-800 text-sm text-white py-1 px-2 rounded" type="submit">Search</button>
					</div>
				</form>
			</div>
		</div>
		</div>
	)
}

export default ImageSearch;