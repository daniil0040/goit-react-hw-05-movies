import { Btn, SearchForm, SearchFormInput } from "./MoviesSearch.styled"

export const MoviesSearch = ({ onGetQuery,value }) => {
    return(<SearchForm onSubmit={onGetQuery}>
            <SearchFormInput type="text" name="query" defaultValue={value}/>
            <Btn type="submit">Submit</Btn>
        </SearchForm>)
}