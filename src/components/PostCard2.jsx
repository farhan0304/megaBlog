import React from 'react'
import service from "../appwrite/config"
import {Link, useNavigate} from 'react-router-dom'

function PostCard2({$id, title, featuredimage}) {
    const navigate = useNavigate()
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
	<img src={service.getFilePreview(featuredimage)} alt={title} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50" 
        onClick={()=>navigate(`/post/${$id}`)}
        fdprocessedid="3o17gh">Read more</button>
	</div>
</div>
  )
}

export default PostCard2
