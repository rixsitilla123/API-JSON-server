import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import axios from 'axios'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Users() {
	const navigate = useNavigate()
	const [users, setUsers] = useState([])
	useEffect(() => {
		axios("http://localhost:3000/users").then(res => { setUsers(res.data) })
	}, [])
	return (
		<div>
			<div className="p-5 flex items-center justify-between">
				<h2 className="text-[25px] font-bold ">Students</h2>
				<Button onClick={() => navigate("add")} size='large ' type='primary'>Add Student</Button>
			</div>
			<div className='p-10'>
				{users.map(item => <UserCard item={item} />)}
			</div>
		</div>

	)
}

export default Users