function HomeSearchBar() {
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default HomeSearchBar