import React from "react";
import DraggableColorbox from "./DraggableColorBox";

import { SortableContainer } from "react-sortable-hoc";

function DraggableColorList({ colors, removeColor }) {
	return (
		<div>
			{colors.map(color => (
				<DraggableColorbox
					key={color.name}
					color={color.color}
					name={color.name}
					handleClick={() => removeColor(color.name)}
				/>
			))}
		</div>
	);
}

export default DraggableColorList;
