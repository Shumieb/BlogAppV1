function HomeSearchBar() {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <form class="d-flex" role="search">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </div>

                    <button class="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default HomeSearchBar