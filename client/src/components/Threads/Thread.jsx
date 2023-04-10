import "./style.css"
const Thread = () => {


  return (
    <div> 
      <div class="comment-thread">
        <div class="commentOne" id="comment-1">
          <div class="comment-heading">
            <img src={require("../images/pfp.png")} alt="test" class="pfp" />
            <div class="comment-info">
              <a href=" " class="comment-author">Ahmad_96</a>
            </div>
          </div>

          <div class="comment-body">
            <p>
              Are there more ways to be able to help people with depression aside from being there to listen and just being a good friend?
            </p>
            <div class="comment-voting">
              <p class="m-0">
                96 points &bull; 4 days ago
              </p>
              <button type="button" className='button'>
                <span aria-hidden="true">&#9650;</span>
                <span class="sr-only">Like</span>
              </button>
              <button type="button" className='button'>Flag</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Thread;