const Thread = () => {
    return (
        <div>
        <div class="wrapper">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href=" ">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href=" ">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href=" ">Link</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href=" " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href=" ">Action</a></li>
                      <li><a class="dropdown-item" href=" ">Another action</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li><a class="dropdown-item" href=" ">Something else here</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a href = " " class="nav-link disabled">Disabled</a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
    </div>
        <div class="comment-thread">
        <div class="comment1" id="comment-1">
            <div class="comment-heading">
                <img src="images/Snail.png" alt="test" class="pfp" />
                <div class="comment-info">
                    <a href=" " class="comment-author">username1</a>
                </div>
            </div>
    
            <div class="comment-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum. Quae animi, ipsum illum accusamus eligendi incidunt, sapiente quia itaque natus aut cum exercitationem cupiditate velit. Vitae vel expedita unde.
                </p>
                <div class="comment-voting">
                    <p class="m-0">
                        xx points &bull; x days ago
                    </p>
                    <button type="button">
                        <span aria-hidden="true">&#9650;</span>
                        <span class="sr-only">Vote up</span>
                    </button>
                    <button type="button">
                        <span aria-hidden="true">&#9660;</span>
                        <span class="sr-only">Vote down</span>
                        <button type="button">Reply</button>
                        <button type="button">Flag</button>
                    </button>
            </div>
    
            <div class="replies">
                <img src="images/arrow.png" alt="arrow" class="arrow" />
                <div class="comment2" id="comment-2">
                    <div class="comment-heading">
                        <img src="images/Snail.png" alt="test" class="pfp" />
                        <div class="comment-info">
                            <a href=" " class="comment-author">username2</a>
                        </div>
                    </div>
    
                    <div class="comment-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed illum officiis odio voluptatum vel distinctio voluptates, quibusdam necessitatibus adipisci quidem quo numquam maiores asperiores ipsam voluptate. Hic, excepturi necessitatibus.
                        </p>
                        <div class="comment-voting">
                            <p class="m-0">
                                xx points &bull; x days ago
                            </p>
                            <button type="button">
                                <span aria-hidden="true">&#9650;</span>
                                <span class="sr-only">Vote up</span>
                            </button>
                            <button type="button">
                                <span aria-hidden="true">&#9660;</span>
                                <span class="sr-only">Vote down</span>
                                <button type="button">Reply</button>
                                <button type="button">Flag</button>
                            </button>
                        </div>
                    </div>
                </div>
    
                <a href="#load-more">Load more replies</a>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default Thread;