import BlogCard from "./BlogCard"

function HomeBlogList() {
    return (
        <div>
            <div className="card d-flex flex-row shadow-sm py-3 px-4 justify-content-start align-items-center mb-4">
                <p className="pt-3 px-2">Order By: </p>
                <div className="flex-grow-1">
                    <select className="form-select" aria-label="Default select example">
                        <option value="date_earliest" selected>Date: Earliest</option>
                        <option value="ascending">Ascending Order: A-Z</option>
                        <option value="descending">Descending Order: Z-A</option>
                        <option value="date_latest">Date: Latest</option>
                    </select>
                </div>
            </div>
            <div className="d-flex flex-column shadow-sm">
                <ul className="m-0 p-0">
                    <li>
                        <BlogCard />
                    </li>
                    <li>
                        <BlogCard />
                    </li>
                    <li>
                        <BlogCard />
                    </li>
                    <li>
                        <BlogCard />
                    </li>
                    <li>
                        <BlogCard />
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default HomeBlogList