function HomeBlogList() {
    return (
        <div>
            <div className="card d-flex flex-row shadow-sm py-3 px-4 justify-content-start align-items-center">
                <p className="pt-3 px-2">Order By: </p>
                <div className="w-60 flex-grow-1">
                    <select className="form-select" aria-label="Default select example">
                        <option value="date_earliest" selected>Date: Earliest</option>
                        <option value="ascending">Ascending Order: A-Z</option>
                        <option value="descending">Descending Order: Z-A</option>
                        <option value="date_latest">Date: Latest</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default HomeBlogList