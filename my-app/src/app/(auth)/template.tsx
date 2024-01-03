import { useState } from "react";

const template = () => {
	const [input, setInput] = useState("");
	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</div>
	);
};

export default template;
