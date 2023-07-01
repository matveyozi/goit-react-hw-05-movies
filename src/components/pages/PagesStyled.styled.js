const { default: styled } = require("styled-components");

export const SearchFormStyled = styled.form`
position: relative;
display: flex;
align-items: center;
width: 100%;

`

export const SearchInputStyled = styled.input`
width: 100%;
border-radius:15px;
padding-left: 10px;

&:focus {
	& ~ label {
		font-size: 16px;
		top: -17px;
		background-color: white;
	}
}
`
export const SearchLabelStyled = styled.label`
position: absolute;
left: 10px;
color: gray;

`


export const SearchButtonStyled = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: black;
border: none;
position: absolute;
right: 15px;
background-color: white;
`