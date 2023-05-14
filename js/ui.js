class User{
    constructor(){
        this.profile=document.querySelector('.profile');
    }
    showprofile(user){
        this.profile.innerHTML=`


        <div class="row">
        <div class="col-4">
          <img
            src="${user.avatar_url}"
            alt="image" class="img-fluid" width="300" height="300" /><br />
          <a href="${user.html_url}" target="_blank" class="btn btn-primary mx-5 mt-4 mb-3">View Profile</a>
        </div>
        <div class="col-8">
          <div class="row">
            
              <span class="btn btn-primary col mx-2">Following:${user.following}</span>
            
            
              <span class="btn btn-secondary col mx-2">Followers: ${user.followers}</span>

            
            
              <span class="btn btn-success col mx-2">Public Repost:${user.public_repos}</span>

            
            
              <span class="btn btn-danger col mx-2">Public gists: ${user.public_gists}</span>

            
          </div>

          

          <div class="row mt-5">
            <div class="card w-100">
              <ul class="list-group list-group-flush">
                <li class="list-group-item fs-3">${user.name}</li>
                <li class="list-group-item">Description:${user.bio}</li>
                <li class="list-group-item">Blog:<a href="${user.blog}" target="_black">${user.blog}</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
        `
    }
}