import { Link } from "react-router-dom"

function BlogCard() {
    return (
        <div className="card px-2 py-2 shadow-sm mb-3">
            <div className="card-body">
                <p className="card-title text-decoration-underline">Blog One</p>
                <p className="card-text font-weight-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur,
                    a quae quaerat autem in amet, tenetur minima eaque, quo alias non dolorem. Alias exercitationem deserunt placeat,
                    iure rem aliquid tenetur architecto vel facere dolorem veniam doloremque?
                    Dolorum optio, autem ea nemo exercitationem, nulla harum necessitatibus dicta quia deleniti non!
                </p>
                <div className="card-body">
                    <p>20 Likes</p>
                    <Link to="/blog/blog-one" class="card-link btn btn-primary">View</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard