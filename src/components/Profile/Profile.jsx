import React from 'react';
import p from './Profile.module.css'

// let p = {
//     'Profile':'Profile_Profile__1BbNO'
//     'img':'Profile_img__1C1pO'
//     'Post':'Profile_Post__1l12E'
// }

const Profile =() =>{
    return(
        <div className={p.profile}>
                <div>
                    <img className={p.img} src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' /> 
                </div>
                <div className={p.ava}>
                    ava + description
             </div>
                <div className ={p.posts}>
                    My posts
                <div className ={p.posts}>
                        new post
                </div>
                    <div className ={p.posts}>
                        post 1
                </div>
                    <div className ={p.posts}>
                        post 2
                </div>
                </div>
            </div>

    );
}
export default Profile;