
import commonAPI from './commonAPI'
import SERVERURL from './serverURL'

// saveVideoAPI - post http request called Add Component user click on add button
export const saveVideoAPI = async (videoDetails)=>{
    return await commonAPI("POST", `${SERVERURL}/uploadVideos`,videoDetails)
}

//getAllVideosAPI - get http rqst called view component wheb component when component displayed in browser inside its useEffect hook
export const getAllVideoAPI= async()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,{})
}

// saveHistoryAPI - post http rqst to http://localhost:3000/history called by VideoCard component when we play video
export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI("POST", `${SERVERURL}/history`,historyDetails)
}

// getAllHistoryAPI - get http rqst to http://localhost:3000/history called by history component when it open in browser
export const getAllHistoryAPI= async()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,{})
}

// deleteHistoryAPI - delete http rqst to http://localhost:3000/history/id called by history component when user click on delete button
export const deleteHistoryAPI  = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}

// removeVideoAPI - get http rqst to videoCard component when user click on delete button
export const removeVideoAPI  = async (id) => {
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

//saveCategoryAPI - post http rqst to http://localhost:3000/categories called by Category component when user click on add btn
// categoryDetails = { CategoryName, allVideos}
export const saveCategoryAPI  = async (categoryDetails) => {
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}

// getCategoryAPI - get http rqst to http://localhost:3000/categories called by category component when it open in browser
export const getCategoryAPI= async()=>{
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}

// deleteCategoryAPI - delete http rqst to http://localhost:3000/categories/id called by Category component when user click on delete button
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}

// updateCategoryAPI - put http rqst to http://localhost:3000/categories/id called by Category component when video drop over the category
export const updateCategoryAPI  = async (categoryDetails) =>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}
