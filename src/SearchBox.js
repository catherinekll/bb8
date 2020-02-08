import React from 'react'; // To run JSX, must always import React

const SearchBox = (props) => {
	return(
		<div className="pa2"> 
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Place" 
                onChange={props.onSearchChange}
                />
		</div>
)
} 
export default SearchBox;
