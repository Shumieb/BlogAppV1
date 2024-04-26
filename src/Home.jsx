import HomeBlogList from "./HomeBlogList"
import HomeSearchBar from "./HomeSearchBar"
import HomeSideBar from "./HomeSideBar"

function Home() {

    return (
        <div className="container">
            <section className="mb-3 w-50 p-2 m-2">
                <HomeSearchBar />
            </section>
            <section className="row m-1">
                <div className="col-8">
                    <HomeBlogList />
                </div>
                <div className="col-4">
                    <HomeSideBar />
                </div>
            </section>

        </div>
    )
}

export default Home