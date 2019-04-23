import React from 'react';

const UserReposInfo = (props) => {
    const { bio, repos } = props;
    let userReposInfo, userReposList;

    if(repos && bio) {
        userReposList = (
            repos.map(repo => (
                <li className="list-group-item" key={ repo.id }>
                    <div className="row">
                        <div className="col-sm-9">
                            <h5>
                                <a href="#">{ repo.name }</a>
                            </h5>
                            <p className="m-0">{ repo.description }</p>
                            <p className="m-0">Last updated on { repo.updated_at }</p>
                        </div> 
                        <div className="col-sm-3">
                            <div className="stats">
                                <span className="badge badge-primary mr-1">Size: { repo.size } KB</span>
                                <span className="badge badge-secondary">{ repo.forks } Forks</span>
                            </div>  
                        </div>
                    </div>
                </li>
            )
        ))

        userReposInfo = (
            <div className="card">
                <div className="card-header">
                    { bio.name }
                </div>
                <div className="card-body">
                    <div className="row">
                        <ul className="list-group">
                            { userReposList }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-12 mt-3 mb-3">
                    { userReposInfo }
                </div>
            </div>
        </React.Fragment>
    )
}

export default UserReposInfo;