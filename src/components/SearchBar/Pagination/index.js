import { PageSelect, PaginationDiv } from "./style";
import { useContext } from "react";
import PageContext from "../../../context/PageContext";

const Pagination = () => {

    const { currentPage, setCurrentPage, totalPages } = useContext(PageContext);
    
    let options = [];
    for (let i = 0; i < totalPages; i++) {
        options.push(i+1)
    }
    const selectPageHandler = evt => {
        evt.preventDefault()
        setCurrentPage(parseInt(evt.target.value))
    }

    
    return(
        <PaginationDiv>
            <span>Página:</span>
            <PageSelect value={currentPage} onChange={selectPageHandler}>
               {options.map((options) => (<option key={options} value={options-1}>{options} de {totalPages}</option>))}
            </PageSelect>
                        
        </PaginationDiv>
    )

}

export default Pagination;