import axios from "axios";

export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const ADD_NEW_POST_SUCCESS = "ADD_NEW_POST_SUCCESS";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const UPDATE_EMOJI_SUCCESS = "UPDATE_EMOJI_SUCCESS";


export const getPost = () => {
    return async dispatch => {
        const response = await axios.get(
            "https://648e53e52de8d0ea11e8ab7f.mockapi.io/blogs"
        );
        dispatch({
            type: FETCH_POST_SUCCESS,
            payload: response.data
        });
    };
};

export const addnewpost = (form)=>{
    return async dispatch =>{
        const response = await axios.post(
            "https://648e53e52de8d0ea11e8ab7f.mockapi.io/blogs",{
                title:form.title,
                body:form.body,
                author:form.author,
                createdAt:Date.now(),
                thumbsUp:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
        )
        dispatch({
            type: ADD_NEW_POST_SUCCESS,
            payload:form
        })
    }
}

export const updatepost = (form)=>{
    return async dispatch =>{
        const response = await axios.put(
            `https://648e53e52de8d0ea11e8ab7f.mockapi.io/blogs/${form.id}`,{
                title:form.title,
                body:form.body,
                author:form.author,
                createdAt:Date.now()
            }
        )
        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload:form
        })
    }
}

export const increment = (emojiname,id,currentcount) =>{
    return async dispatch =>{
        const response = await axios.put(`https://648e53e52de8d0ea11e8ab7f.mockapi.io/blogs/${id}`,{
            [emojiname]: currentcount+1
        })
        dispatch({
            type: UPDATE_EMOJI_SUCCESS,
            payload:{emojiname,id,currentcount}
        })
    }
}
export const deletepost = (id)=>{
    return async dispatch =>{
        const response = await axios.delete(`https://648e53e52de8d0ea11e8ab7f.mockapi.io/blogs/${id}`);
        dispatch({
            type: DELETE_POST_SUCCESS,
            payload:id
        })
    }
}